import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
var cookies = new Cookies();

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1,
            tasks: []
        };
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:9000/',
            data: null,
            headers: {'X-access-token': cookies.get('Token')}
        }).catch(err => {
            console.log(err);
        }).then(res => {
            if (res.data !== '') {
                this.setState({tasks: res.data})
                localStorage.setItem('tasks', JSON.stringify(res.data));
            }
            else {
                this.setState({tasks: []});
                localStorage.setItem('tasks', JSON.stringify(res.data));
                console.log('Token is invalid or expired!');
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({tasks: nextProps.tasks})
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name : name === 'filterName' ? value : this.state.filterName,
            status : name === 'filterStatus' ? value : this.state.filterStatus
        };
        this.props.onFilterTable(filter);
        this.setState({
            [name] : value
        });
    }

    render() {
        var { filterTable, keyword, sort } = this.props;
        var {tasks} = this.state;
        // filter on table
        if(filterTable.name){
            tasks = tasks.filter((task) => {
                return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
            });
        }

        tasks = tasks.filter((task) => {
            if(filterTable.status === -1){
                return task;
            }else{
                return task.status
                === (filterTable.status === 1 ? true : false);
            }
        });

        // search
        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        // sort
        if(sort.by === 'name'){
            tasks.sort((a, b) => {
                if(a.name > b.name) return sort.value;
                else if(a.name < b.name) return -sort.value;
                else return 0;
            });
        }else{
            tasks.sort((a, b) => {
                if(a.status > b.status) return -sort.value;
                else if(a.status < b.status) return sort.value;
                else return 0;
            });
        }

        var elmTasks = tasks.map((task, index) => {
            return (
                <TaskItem
                    key={task.id}
                    task={task}
                    index={index + 1}
                />
            )
        });

        if (this.state.isAuth === false) {
            return <Redirect to='/login' />
        }

        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">No.</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        placeholder='Enter Keyword(s)...'
                                        onChange={ this.onChange }
                                        value={ this.state.filerName }
                                    />
                                </td>
                                <td>
                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        onChange={ this.onChange }
                                        value={ this.state.filterStatus }
                                    >
                                        <option value={-1}>All</option>
                                        <option value={0}>Disable</option>
                                        <option value={1}>Active</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { elmTasks }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks : state.tasks,
        filterTable : state.filterTable,
        keyword : state.search,
        sort : state.sort
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.filterTask(filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
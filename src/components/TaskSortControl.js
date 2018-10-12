import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskSortControl extends Component {

    onClick = (e, sortBy, sortValue) => {
        e.preventDefault();
        this.props.onSort({
            by : sortBy,
            value : sortValue
        });
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort <span className="fas fa-caret-square-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={ (e) => this.onClick(e,'name', 1) }>
                            <a  href='/'
                                role="button"
                            >
                                <span className="fa fa-sort-alpha-down pr-5">
                                    Name A-Z
                                </span>
                                {(this.props.sort.by === 'name' && this.props.sort.value === 1) ? <span className='fas fa-check text-right'></span> : ''}
                            </a>
                        </li>
                        <li onClick={ (e) => this.onClick(e,'name', -1) }>
                            <a  href='/'
                                role="button"
                            >
                                <span className="fa fa-sort-alpha-up pr-5">
                                    Name Z-A
                                </span>
                                {(this.props.sort.by === 'name' && this.props.sort.value === -1) ? <span className='fas fa-check text-right'></span> : ''}
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={ (e) => this.onClick(e,'status', 1) }>
                            <a  href='/'
                                role="button"
                            >
                                Active
                                {(this.props.sort.by === 'status' && this.props.sort.value === 1) ? <span className='fas fa-check text-right'></span> : ''}
                            </a>
                        </li>
                        <li onClick={ (e) => this.onClick(e,'status', -1) }>
                            <a  href='/'
                                role="button"
                            >
                                Disable
                                {(this.props.sort.by === 'status' && this.props.sort.value === -1) ? <span className='fas fa-check text-right'></span> : ''}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sort : state.sort
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => { // sort.by sort.value
            dispatch(actions.sortTask(sort));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSortControl);
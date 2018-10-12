import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

    showStatusElement(){
        return (
            <span
                className={ this.props.task.status ? 'label label-success' : 'label label-danger' }
                onClick={ this.onUpdateStatus }
            >{ this.props.task.status === true ? 'Active' : 'Disable' }</span>
        );
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    }

    render() {
        return (
            <tr>
                <td>{ this.props.index }</td>
                <td>{ this.props.task.name }</td>
                <td className="text-center">
                    { this.showStatusElement() }
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={ this.onEditTask }>
                        <span className="fas fa-edit mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button
                        type="button" className="btn btn-danger"
                        onClick={ this.onDeleteItem }>
                        <span className="fas fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatus(id));
        },
        onDeleteTask : (id) => {
            dispatch(actions.deleteTask(id))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        },
        onEditTask : (task) => {
            dispatch(actions.editTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
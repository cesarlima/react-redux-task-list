import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TaskList from './task-list';
import TaskForm from './task-form';
import { add, changeDescription, load, markAsCompleted, deleteTask } from './../reducers/actions';

class Task extends Component {

    componentWillMount() {
        this.props.load();
    }

    render() {
        const { add, changeDescription, title, tasks, markAsCompleted, deleteTask } = this.props
        return (
            <div className="container">
                <TaskForm
                    handleAdd={add}
                    handleOnChange={changeDescription}
                    title={title}
                />
                <TaskList
                    tasks={tasks}
                    markAsCompleted={markAsCompleted}
                    deleteTask={deleteTask}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.list,
    title: state.title
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ load, add, changeDescription, markAsCompleted, deleteTask }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Task)

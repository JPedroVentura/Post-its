import React, { Component } from 'react';

//Task

import Form from './Form';
import Task from './Task';
import './Main.css';

class Main extends Component {
    state = {
        newTask: '',
        tasks: [],
        index: -1,
        newColor: '',
    };

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tarefas'));
        const newColor = JSON.parse(localStorage.getItem('cores'));

        if (!tasks) return;
        if (!newColor) return;

        this.setState({ tasks, newColor });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks, newColor } = this.state;

        if (tasks === prevState) return;

        localStorage.setItem('tarefas', JSON.stringify(tasks));
        localStorage.setItem('cores', JSON.stringify(newColor));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tasks, index } = this.state;
        let { newTask } = this.state;

        newTask = newTask.trim();

        if (tasks.indexOf(newTask) !== -1) return;

        const newTasks = [...tasks];

        if (index === -1) {
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: '',
            });
        } else {
            newTasks[index] = newTask;

            this.setState({
                tasks: [...newTasks],
                index: -1,
            })
        }
    }

    handleEdit = (e, index) => {
        const { tasks } = this.state;

        this.setState({
            index,
            newTask: tasks[index],
        });
    }

    handleDelete = (e, index) => {
        const { tasks } = this.state;
        const newTasks = [...tasks];

        newTasks.splice(index, 1);

        this.setState({
            tasks: [...newTasks],
        })
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    }

    handleColor = (e) => {
        this.setState({
            newColor: e.target.value,
        })
    }


    render() {
        const { newTask, newColor, tasks } = this.state;

        return (
            <div className="main">
                <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTask={newTask} handleColor={this.handleColor} newColor={newColor}/>
                <div className='task-card'>
                    <Task tasks={tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} color={newColor} />
                </div>
            </div>
        )
    }
}


export default Main;
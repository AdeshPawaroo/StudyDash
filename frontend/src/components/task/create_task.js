import React from 'react';
import TaskBox from './task_box';

class TaskCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            newTask: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newTask: nextProps.newTask.task });
    }

    handleSubmit(e) {
        e.preventDefault();
        let task = {
            task: this.state.task
        };

        this.props.composeTask(task);
        this.setState({ task: '' })
    }

    update() {
        return e => this.setState({
            task: e.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="textarea"
                            value={this.state.task}
                            onChange={this.update()}
                            placeholder="Write your task..."
                        />
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                <TaskBox task={this.state.newTask} />
            </div>
        )
    }
}

export default TaskCompose;

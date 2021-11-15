import React from 'react';

class TaskBox extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.task}</h3>
            </div>
        );
    }
}

export default TaskBox;

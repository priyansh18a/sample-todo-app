import React from 'react';
import './Style.css';

function Task(props) {

    return (
        <div className="task-content">
            <p className={(props.task.completed ?  "completedText" : "normalText" )}>{props.task.title}</p>
            <div className='buttons'>
                {!props.task.completed && <button className='btn btn-edit' onClick={() => props.handleEdit(props.task)}>Edit</button>}
                {!props.task.completed && <button className='btn btn-completed' onClick={() => props.handleComplete(props.task.index)}>Complete</button>}
                <button className='btn btn-delete' onClick={() => props.handleDelete(props.task.index)}>x</button>
            </div>
        </div>
    );
}

export default Task;


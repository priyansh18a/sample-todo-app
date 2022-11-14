import React, { useState } from 'react';
import './Style.css';

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit} className="create-task-form">
            <input
                type="text"
                className="input-box"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit" className='btn btn-add-task'>Add Task</button>
        </form>
    );
}

export default CreateTask;
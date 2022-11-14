import React  from 'react';
import './Style.css';

function EditTask(props) {
    const handleSubmit = e => {
        e.preventDefault();
        if (!props.task.title) return;
        props.handleUpdate(props.task.index)
    }

    return (
        <form onSubmit={handleSubmit} className='edit-task'>
            <input
                name="editTodo"
                type="text"
                placeholder="Edit todo"
                value={props.task.title}
                onChange={props.handleEditTask}
                className="input-box"
            />
            <button type='submit' className="btn btn-completed">Update</button>
            <button type='cancel' onClick={() => props.handleCancel(props.task.index)} className="btn btn-delete">Cancel</button>
        </form>
    );
}

export default EditTask;
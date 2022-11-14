import React, { useState } from 'react';
import CreateTask from './CreateTask';
import EditTask from './EditTask';
import Task from './Task';
import './Style.css';

let globalIndex = 1;

function Homepage() {
    const [editingTask, setEditingTask] = useState({});

    // Hardcoded Task
    const [tasks, setTasks] = useState([{
        title: "These are sample task.",
        completed: true,
        isEditing: false,
        index: 0
    },
    {
        title: "Click on add button to add you task.",
        completed: false,
        isEditing: false,
        index: 1
    },
    ]);

    // function to handle editing of task
    function handleEditTask(e) {
        setEditingTask({ ...editingTask, title: e.target.value });
    }

    // function to handle task update
    function handleUpdate(index) {
        const newTasks = [...tasks];
        const task = newTasks.find(task => task.index === index);
        task.isEditing = false;
        task.title = editingTask.title;
        setTasks(newTasks);
    }

    //function to handle cancellation of edit task
    function handleCancel(index) {
        const newTasks = [...tasks];
        const task = newTasks.find(task => task.index === index);
        task.isEditing = false;
        setTasks(newTasks);
    }

    //function to handle task delete
    function handleDelete(index) {
        let newTasks = [...tasks];
        newTasks = newTasks.filter(task => task.index !== index);
        setTasks(newTasks);
    };

    //function to handle editing of task
    function handleEdit(currentTask) {
        const newTasks = [...tasks];
        newTasks.map((task) => (
            task.index === currentTask.index ? task.isEditing = true : task.isEditing = false
        ));
        setTasks(newTasks);
        setEditingTask({ ...currentTask });
    }

    //function to mark task complete
    function handleComplete(index) {
        const newTasks = [...tasks];
        const task = newTasks.find(task => task.index === index);
        task.completed = true;
        setTasks(newTasks);
    };
    
    //function to create new task
    function addTask(title) {
        globalIndex++;
        const newTasks = [...tasks, { title, completed: false, isEditing: false, index: globalIndex }];
        setTasks(newTasks);
    };

    return (
        <div className='container'>
            <h2>Sample TODO App</h2>

            <div className="tasks">
                {tasks.map(task => (
                    <div className="task-list" key={task.index}>
                        {task.isEditing ?
                            <EditTask task={editingTask} handleEditTask={handleEditTask} handleUpdate={handleUpdate} handleCancel={handleCancel} />
                            :
                            <Task task={task} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete} />
                        }
                    </div>
                ))}

                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
            <h5>Made by Priyanshu Gupta for VoyceMe Software Engineering Internship Assignment</h5>
        </div>
    );
}

export default Homepage;
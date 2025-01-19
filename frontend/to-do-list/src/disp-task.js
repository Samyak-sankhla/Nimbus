
import React, { useEffect, useState } from 'react';
import axios from 'axios';

 const DispTask = () => 
    {
    const [tasks, setTasks] = useState([]);

     useEffect(() => 
        {
            axios.get('./api/tasks')
            .then(response => {
            setTasks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the tasks!', error);
                });
        }, []);

        const handleEdit = (id) => {
                    
        };

        const handleDelete = (id) => {
                    
        };

        const handleComplete = (id) => {
                   
        };

        return (
            <div className="disp-task-list">
                {tasks.map(task => 
                (
                    <div className="list-ele" key={task.id}>
                        <span>{task.name}</span>
                        <button className="list-btn" onClick={() => handleEdit(task.id)}>Edit</button>
                        <button className="list-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                        <button className="list-btn" onClick={() => handleComplete(task.id)}>Complete</button>
                    </div>
                ))}
            </div>
                );
    }

export default DispTask;

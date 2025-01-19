import React, { useState } from 'react';

const NewTask = () => {
 
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>

      <input
        type="text"
        value={task}
        placeholder="Task"
        className='task-input'
        onChange={(event) => setTask(event.target.value)}
      />

      <input type="date" value={dueDate} id="dueDate" name="dueDate" onChange={(event) => setDueDate(event.target.value)}/>

      <input className="date-input" type="time" value={dueTime} id="dueTime" name="dueTime" onChange={(event) => setDueTime(event.target.value)} />

      <button className="new-task-btn" type="submit">Add Task</button>
    </form>
  );
}

export default NewTask;
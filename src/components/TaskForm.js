import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows="3"
        />
      </div>
      <button type="submit" className="submit-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
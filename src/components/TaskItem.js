import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          <span className="task-date">{formatDate(task.createdAt)}</span>
        </div>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
      </div>
      <div className="task-actions">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`toggle-btn ${task.completed ? 'completed' : 'incomplete'}`}
        >
          {task.completed ? '✓' : '○'}
        </button>
        <button
          onClick={() => onDeleteTask(task.id)}
          className="delete-btn"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
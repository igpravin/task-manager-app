import React from 'react';
import './TaskFilter.css';

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'pending', label: 'Pending' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="task-filter">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`filter-btn ${currentFilter === filter.key ? 'active' : ''}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
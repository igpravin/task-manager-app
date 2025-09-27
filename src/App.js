import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('taskManagerTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('taskManagerTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  // Toggle task completion status
  const toggleTaskComplete = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Filter tasks based on completion status and search term
  const filteredTasks = tasks.filter(task => {
    // Filter by completion status
    const matchesFilter = 
      filter === 'all' ||
      (filter === 'completed' && task.completed) ||
      (filter === 'pending' && !task.completed);
    
    // Filter by search term
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Calculate task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="App">
      <header className="app-header">
        <h1>Task Manager</h1>
        <p className="app-subtitle">Stay organized and get things done!</p>
      </header>
      
      <main className="app-main">
        <div className="task-form-container">
          <TaskForm onAddTask={addTask} />
        </div>
        
        <div className="task-stats">
          <div className="stat">
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{pendingTasks}</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>
        
        <div className="task-controls">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
          <TaskFilter 
            currentFilter={filter} 
            onFilterChange={setFilter} 
          />
        </div>
        
        <div className="task-list-container">
          <TaskList 
            tasks={filteredTasks}
            onToggleComplete={toggleTaskComplete}
            onDeleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;

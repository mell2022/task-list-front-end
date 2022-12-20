import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import axios from 'axios';


const App = () => {
  const [taskData, setTaskData] = useState([
      {
        id: 1,
        title: 'Mow the lawn',
        isComplete: false,
      },
      {
        id: 2,
        title: 'Cook Pasta',
        isComplete: true,
      },
  ]);

  const updateTaskData = updatedTask => {
    const tasks = taskData.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });

    setTaskData(tasks);
  };

  const addTask = (task) => {
    // this is where our axios call goes
  };

  const deleteTask = id => {
    const newTasks = taskData.filter((task) => task.id !== id);
    setTaskData(newTasks);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList 
            tasks={taskData} 
            onUpdateTasks={updateTaskData}
            deleteTask={deleteTask} />
          <NewTaskForm addTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;

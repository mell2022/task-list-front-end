import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm.js';
import './App.css';
import axios from 'axios';

export const URL = 'http://127.0.0.1:5000/';

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

  // use axios to make GET request
  // update DELETE to reflect API call
  // update addTask to reflect API call

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete
          };
        });

        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  }, []);

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
    axios
      .post(URL, task)
      .then((response) => {
        const newTasks = [ ...taskData];
        newTasks.push({ id: response.data.id, ...task });
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };

  const deleteTask = id => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = taskData.filter((task) => task.id !== id);
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log(error.response.status);
        console.log(error.response.data);
      });
  };

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

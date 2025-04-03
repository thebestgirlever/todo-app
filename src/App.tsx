import { useState } from 'react';
import styles from './App.module.css';
import Form from './components/Form';
import List from './components/List';

interface Task {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask = {
      text,
      id: Date.now(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };


  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(prevTasks => prevTasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };



  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const clearDoneTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className={styles.block}>
      <h1 className={styles.title}>To Do App</h1>
      <Form addTask={addTask} />
      <List
        tasks={incompleteTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        title="Active tasks"
      />
      <p className={styles.remainText}>
        {incompleteTasks.length > 0 ? `tasks left ${incompleteTasks.length}` : ''}
      </p>

      <List
        tasks={completedTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
        title="Completed tasks"
      />
      {completedTasks.length > 0 && <button className={styles.button} onClick={clearDoneTasks}>Clear completed tasks</button>}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Clock from './components/Clock'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import styles from './App.module.css';

export default function App() {
  // Retorna as tarefas salvas anteriormente ou senão um array vazio.
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  // Faz um spread pra inserir uma nova task
  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}]);
  };


  const editTask = (id, newTask) => {

  };


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <Clock />
      </div>
    </>
  );
};
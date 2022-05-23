import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks.jsx";
import Task from './Task/Task';
import styles from "./taskApp.module.css";
import TaskHeader from './TaskHeader/TaskHeader';


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [text, setText] = useState([]);
  const totaltaskof=text.length;
  const takeTaskList = (newTask) => {
    if (text.length === 0) {
      setText([...text, newTask]);
    } else {
      for (let i = 0; i < text.length; i++) {
        if (text[i] === newTask) {
        } else {
          setText([...text, newTask]);
        }
      }
    }
  };
  const handleDelete=(newvalue)=>{
    setText(text.filter((el)=> el !==newvalue))
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader totaltaskof={totaltaskof}/>
      {/* Add Task */}
      <AddTask takeTaskList={takeTaskList} />
      {/* Tasks */}
      <Tasks text={text} handleDelete={handleDelete}/>
    </div>
  );
};

export default TaskApp;

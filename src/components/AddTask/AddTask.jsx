import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = ({takeTaskList}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [value, setValue] = useState('');
  const handleValue=(newValue)=>{
    
  }
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" value={value} type="text" placeholder='Add task...'
      onChange={(e)=> setValue(e.target.value)} />
      <button data-cy="add-task-button"
      onClick={()=>{takeTaskList(value); setValue('')} }>+</button>
    </div>
  
  );
};

export default AddTask;

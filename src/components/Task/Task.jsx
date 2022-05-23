import React from "react";
import styles from "./task.module.css";
import { v4 as uuidv4 } from "uuid";
import Counter from "../Counter/Counter";

const Task = ({ text,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  let ans = false;
  const handleTrue = (ans) => {
    console.log(ans);
  };
  return (
    <li data-cy="task" className={styles.task}>
      <div data-cy="task-text">
        {text.map((el) => (
          <div className={styles.newClass} key={uuidv4()}>
            <input
              type="checkbox"
              data-cy="task-checkbox"
              onChange={(e) => {
                handleTrue(e.target.checked);
              }}
            />
            <p style={{ color: ans == true ? "red" : "pink" }} key={uuidv4()}>
              {el}
            </p>
            <Counter />
            <button data-cy="task-remove-button" onClick={()=>handleDelete(el)}>X</button>
          </div>
        ))}
      </div>
      {/* Counter here */}
    </li>
  );
};

export default Task;

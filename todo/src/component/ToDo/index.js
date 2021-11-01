import React, { useState } from "react";
import App from "../../App";
import TodoItem from "../TodoItem";
import "./style.css";

const Index = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      name: "play",
    },
    { id: 2, name: "sleep" },
  ]);


  const handleSubmit = (e) => {
    e.preventDefault()
    const todo = {
    name:  e.target.task.value
} 

  setTask ([...task, todo])
  e.target.task.value = "";

  }
  return (
    <div className="todo">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task"/>
            <button>Add Task</button>
        </form>
        <ul>
      {task.map((item, i) => (
        <TodoItem task={item} key={i} />
      ))}
      </ul>
    </div>
  );
      }
    

export default Index;

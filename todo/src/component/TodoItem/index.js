import React, { Component , useState} from 'react';

import "./style.css";

const TodoItem = (props) => {
    return (
        <>
        <li className= "todoItem">
            <h3 className="name">{props.task.name}</h3>
        </li>
        </> 
    );
}



export default TodoItem;
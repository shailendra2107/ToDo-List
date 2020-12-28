import React from 'react'
import { IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import "./App.css"


function ToDoList({ text, onSelect, id }) {
    return (
        <div className="todoList">
            <IconButton>
                <CancelIcon onClick={() => onSelect(id)} />
            </IconButton>

            <li >{text}</li>
        </div>
    )
}

export default ToDoList


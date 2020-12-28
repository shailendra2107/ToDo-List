import React, { useState } from 'react'
import './App.css';
import ToDoList from './ToDoList';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function App() {
  const [input, setInput] = useState("")
  const [name, setName] = useState([])

  const addItems = () => {
    setName((oldvalue) => [...oldvalue, input])
    setInput("")
  };

  const deleteItems = (id) => {
    setName((oldvalue) => {
      return oldvalue.filter((element, i) => {
        return i !== id
      })
    })
  }

  return (
    <div className="app">
      <div className="box">

        <div className="heading">
          <h1>ToDo List</h1>
        </div>

        <div className="input__field">

          <input
            type="text"
            placeholder="Add a Items"
            onChange={(e) => setInput(e.target.value)}
            value={input}

          />
          <IconButton>
            <AddIcon onClick={addItems} />
          </IconButton>


        </div>

        <div className="list__field">
          <ul>
            {name.map((value, i) => (
              <ToDoList
                text={value}
                key={i}
                id={i}
                onSelect={deleteItems}
              />
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default App;

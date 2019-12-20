import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [toDoItems, updateToDoItems] = useState([]);

  function addItem(toDoItem) {
    if (toDoItem !== "")
      updateToDoItems(existingItems => [...existingItems, toDoItem]);
  }

  function deleteItem(id) {
    updateToDoItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onAdd={addItem} />
      </div>
      <div>
        <ul>
          {toDoItems.map((item, index) => (
            <ToDoItem
              id={index}
              key={index}
              item={index + item}
              onClicked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

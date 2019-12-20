import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [toDoItem, setToDoItem] = useState("");
  const [toDoItems, updateToDoItems] = useState([]);

  function hOnChange(e) {
    let tdVal = e.target.value;

    setToDoItem(tdVal);
    return toDoItem;
  }

  function addItem() {
    if (toDoItem !== "") {
      updateToDoItems(existingItems => [...existingItems, toDoItem]);
      setToDoItem("");
      document.getElementById("txtItem").focus();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input id="txtItem" type="text" onChange={hOnChange} value={toDoItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

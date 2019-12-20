import React, { useState } from "react";

function InputArea(props) {
  const [toDoItem, setToDoItem] = useState("");

  function hOnChange(e) {
    let tdVal = e.target.value;

    setToDoItem(tdVal);
    return toDoItem;
  }

  return (
    <div>
      <input id="txtItem" type="text" onChange={hOnChange} value={toDoItem} />
      <button
        onClick={() => {
          props.onAdd(toDoItem);
          setToDoItem("");
          document.getElementById("txtItem").focus();
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

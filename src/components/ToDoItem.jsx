import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onClicked(props.id);
      }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;

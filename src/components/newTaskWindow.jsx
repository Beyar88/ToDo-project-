import React from "react";
import "./NewTask.css";

function NewTask(props) {
  return (
    <div>
      <form className="add-task-form">
        <input id="descreption-text" type="text"></input>
        <button
          type="submit"
          id="add-task-btn"
          onClick={props.addButtonHandler}
        >
          Add
        </button>
        <button onClick={props.closeButtonHandler}>Close</button>
      </form>
    </div>
  );
}

export default NewTask;

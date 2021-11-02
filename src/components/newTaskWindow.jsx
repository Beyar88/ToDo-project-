import React from "react";
import './NewTask.css';








function NewTask(props){
        return (
            <div>
                <form>
                    <input id='descreption-text' type='text'></input>
                    <button type='submit' id='add-task-btn' onClick={props.addTaskText}>Add</button>
                    <button onClick={props.addNewtask}>close</button>
                </form>
            </div>
        )
}


export default NewTask;
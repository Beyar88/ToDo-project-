import { useState, useEffect } from "react";
import "./App.css";
import ToDoItem from "./components/todo-items";
import NewTask from "./components/newTaskWindow.jsx";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/items")
      .then((res) => {
        if (res.ok) {
          console.log("Success!");
        } else {
          console.log("Unsucessful");
        }

        return res.json();
      })
      .then(
        (result) => {
          console.log({ result });

          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function markDoneHandler(descreption) {
    const UndoneTasks = items.filter(
      (item) => item.descreption !== descreption
    );
    const DoneItem = items.filter((item) => item.descreption === descreption);
    DoneItem[0].complete = "true";
    const newItems = [...DoneItem, ...UndoneTasks];
    setItems(newItems);
  }

  function unDoHandler(descreption) {
    const UndoneTasks = items.filter(
      (item) => item.descreption !== descreption
    );
    const DoneItem = items.filter((item) => item.descreption === descreption);
    DoneItem[0].complete = "false";
    const newItems = [...DoneItem, ...UndoneTasks];
    setItems(newItems);
  }

  const [open, setopen] = useState(false);

  function addNewTask() {
    setopen((open) => !open);
    console.log(open);
  }

  function addTaskContent(e) {
    e.preventDefault();
    console.log("working");
    let taskText = document.querySelector("#descreption-text").value;
    let textObject = [{ descreption: taskText, complete: "false" }];
    let newTaskArray = [...textObject, ...items];
    setItems(newTaskArray);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h1 className="main-header">AwesomeDo</h1>

        <button className="add-task" onClick={addNewTask}>
          Add new task
        </button>

        {open && (
          <NewTask
            addNewtask={addNewTask}
            addTaskText={addTaskContent}
          ></NewTask>
        )}

        <h2>ToDo</h2>

        {items
          .filter((item) => item.complete === false)
          .map((item) => (
            <ToDoItem
              key={item.id}
              buttonHandle={markDoneHandler}
              descreption={item.task}
              complete={item.complete}
            ></ToDoItem>
          ))}

        <h2>Done</h2>

        {items
          .filter((item) => item.complete === true)
          .map((item) => (
            <ToDoItem
              key={item.id}
              buttonHandle={unDoHandler}
              descreption={item.task}
              complete={item.complete}
            ></ToDoItem>
          ))}
      </div>
    );
  }
}

export default App;

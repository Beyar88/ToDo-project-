import { useState, useEffect } from "react";
import "./App.css";
import ToDoItem from "./components/todo-items";
import NewTask from "./components/newTaskWindow.jsx";
import { useAuth } from "./security/authContext";
import LogOut from "./security/LogOut";
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
  addNewTask,
  getItems,
  markItemsDone,
  markUndo,
  deleteItem,
} from "./data/data";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const { currentUser } = useAuth();
  let ENVurl =
    process.env.REACT_APP_DevelopmentURl ||
    "https://beyar-todo-app.herokuapp.com/api/items";
  useEffect(() => {
    fetch(`${ENVurl}/${currentUser.uid}`)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [currentUser.uid]);

  const markDoneHandler = async (description) => {
    await markItemsDone(description, currentUser.uid);
    const data = await getItems(currentUser.uid);
    setItems(data);
  };

  const unDoHandler = async (description) => {
    await markUndo(description, currentUser.uid);
    const data = await getItems(currentUser.uid);
    setItems(data);
  };

  const [open, setopen] = useState(false);

  function toggleNewTaskFormHandler() {
    setopen((open) => !open);
  }

  const addNewTaskHandler = async (e) => {
    e.preventDefault();
    const task = {
      taskValue: document.querySelector("#descreption-text").value,
      userID: currentUser.uid,
    };

    await addNewTask(task);

    const data = await getItems(currentUser.uid);

    setItems(data);
  };

  const deleteButtonHandler = async (description) => {
    await deleteItem(description, currentUser.uid);
    const data = await getItems(currentUser.uid);
    setItems(data);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <h1 className="wellcome">Welcome {currentUser.email}</h1>
        <nav>
          <LogOut />{" "}
          <Link to="/update-profile" className="profile-update-link">
            <BsFillPersonLinesFill className="profile-update-icon" />
            Update Profile
          </Link>
        </nav>
        <h1 className="main-header">AwesomeDo</h1>

        <button className="add-task" onClick={toggleNewTaskFormHandler}>
          Add new task
        </button>

        {open && (
          <NewTask
            closeButtonHandler={toggleNewTaskFormHandler}
            addButtonHandler={addNewTaskHandler}
          ></NewTask>
        )}

        <h2>ToDo</h2>

        {items
          .filter((item) => item.complete === false)
          .map((item) => (
            <ToDoItem
              key={item.id}
              buttonHandle={markDoneHandler}
              description={item.task}
              complete={item.complete}
              deleteButtonHandle={deleteButtonHandler}
            ></ToDoItem>
          ))}

        <h2>Done</h2>

        {items
          .filter((item) => item.complete === true)
          .map((item) => (
            <ToDoItem
              key={item.id}
              buttonHandle={unDoHandler}
              description={item.task}
              complete={item.complete}
              deleteButtonHandle={deleteButtonHandler}
            ></ToDoItem>
          ))}
      </div>
    );
  }
}

export default App;

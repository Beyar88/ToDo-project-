let ENVurl =
  process.env.REACT_APP_DevelopmentURl ||
  "https://beyar-todo-app.herokuapp.com/api/items";

const getItems = async (userID) => {
  const url = `${ENVurl}/${userID}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

const addNewTask = async (task) => {
  const url = `${ENVurl}`;

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  };

  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const markItemsDone = async (description, userID) => {
  const url = `${ENVurl}/markdone`;
  const item = { Description: description, UserID: userID };
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };

  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const markUndo = async (description, userID) => {
  const url = `${ENVurl}/undo`;
  const item = { Description: description, UserID: userID };
  const settings = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (description, userID) => {
  const url = `${ENVurl}/delete`;
  const item = { Description: description, UserID: userID };
  const settings = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  };
  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

export { addNewTask, getItems, markItemsDone, markUndo, deleteItem };

const getItems = async (userID) => {
  const url = `http://localhost:3100/api/items/${userID}`;

  const response = await fetch(url);

  const data = await response.json();

  return data;
};

const addNewTask = async (task) => {
  const url = "http://localhost:3100/api/items";

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
  const url = "http://localhost:3100/api/items/markdone";
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
  const url = "http://localhost:3100/api/items/undo";
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
  const url = "http://localhost:3100/api/items/delete";
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

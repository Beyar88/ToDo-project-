const getItems = async () => {
  const url = "http://localhost:3100/api/items";

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
    body: JSON.stringify({ task: task }),
  };

  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const markItemsDone = async (task) => {
  const url = "http://localhost:3100/api/items/markdone";

  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: task }),
  };

  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const markUndo = async (task) => {
  const url = "http://localhost:3100/api/items/undo";

  const settings = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: task }),
  };
  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

const deleteItem = async (task) => {
  const url = "http://localhost:3100/api/items/delete";
  const settings = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: task }),
  };
  try {
    await fetch(url, settings);
  } catch (error) {
    console.log(error);
  }
};

export { addNewTask, getItems, markItemsDone, markUndo, deleteItem };

export const signup = async (e) => {
  e.preventDefault();
  const userName = document.querySelector("#uname").value;
  const passWord = document.querySelector("#psw").value;
  console.log(userName);
  console.log(passWord);
  const user = { username: userName, password: passWord };
  const addNewUser = async (user) => {
    const url = "http://localhost:3100/api/user";
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user }),
    };
    try {
      await fetch(url, settings);
    } catch (error) {
      console.log(error);
    }
  };
  addNewUser(user);
  
};

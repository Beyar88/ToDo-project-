import React from "react";
import { Navigate } from "react-router-dom";
import App from "../App";

export const login = async (e) => {
  e.preventDefault();
  const userName = document.querySelector("#uname").value;
  const passWord = document.querySelector("#psw").value;
  const user = { username: userName, password: passWord };
  const userAuthentication = async (user) => {
    const url = "http://localhost:3100/api/user/auth";
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
  console.log (user)
  userAuthentication(user);
  // if () {
  //   return <App />;
  // } else return <h1>user not found</h1>;
};

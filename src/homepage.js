import React from "react";
import Login from "./security/loginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./security/protectedroute";


function HomePage() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/user" element={<ProtectedRoute />} /> */}
      </Routes>
    </Router>
  );
}

export default HomePage;

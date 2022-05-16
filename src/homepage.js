import React from "react";
import SingUp from "./security/singup";
import LogIn from "./security/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./security/authContext";
import App from "./App";
import NotFound from "./components/NotFound";
import RequireAuth from "./security/RequireAuth";
import ForgotPassword from "./security/forgotPassword";
import UpdateProfile from "./security/updateProfile";
function HomePage() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/password-reset" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile/>} />
          <Route
            path="/"
            element={
              <RequireAuth redirectTo="/login">
                <App />
              </RequireAuth>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default HomePage;

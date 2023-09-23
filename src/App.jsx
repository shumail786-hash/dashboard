import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/sidebar/Sidebar";
import Dashboard from "./containers/dashboard/Dashboard";
const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <div className="app__header">
            <SideBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer autoClose={1500}></ToastContainer>
      </div>
    </div>
  );
};

export default App;

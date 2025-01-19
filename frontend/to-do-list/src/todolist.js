import React from "react";
import NewTask from "./new-task";
import Navbar from 'react-bootstrap/Navbar';
import logo from "./assets/logo1.png";
import DispTask from "./disp-task";

function ToDoList() {
    return (
      <div className="container">
        
        <Navbar className="nav-bar">
                <img className="home-page-img" src={logo} alt="logo" />
                <a href="/to-do-list">Home</a>
                <a href="/about-us">About</a>
                <a href="/">Logout</a>
        </Navbar>
        
        <div className="new-task">
            <NewTask />
            <DispTask />
        </div>
      </div>
    );
  }

export default ToDoList;
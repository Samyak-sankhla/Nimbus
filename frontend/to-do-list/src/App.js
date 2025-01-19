import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import ToDoList from './todolist';
import AboutUs from './about-us';


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <ToDoList /> : <Login onLogin={handleLogin} />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

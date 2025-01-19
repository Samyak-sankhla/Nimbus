import React from 'react';  
import { useState } from 'react';
import './App.css';
import { LoginImg } from './animations/login-img';


const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
    };
    
    return ( 

        
        <div className="login-container">
            
            <LoginImg />
            
            <h1>Welcome to Nimbus </h1>
            <h3>Navigating life, one task at a time.</h3>
            
            
            <form className="login-form" onSubmit={handleSubmit}>

                
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className="login-btn"type="submit">Login</button>
                <button className="reg-btn" type="button" onClick={() => {window.location.href = '/register';}}>New? Register here</button>
            </form>

        </div>
    );
    }
  
export default Login;
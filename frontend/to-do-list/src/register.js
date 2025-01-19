import React, { useState } from 'react';
import { LoginImg } from './animations/login-img';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        
        console.log('Registering user:', { username, password, email });
        
        alert('User registered successfully');
        window.location.href = '/';
    };

    return (
        <div className="login-container">
            <LoginImg />
            <h2>Ready to onboard Nimbus?</h2>
            <form className='login-form' onSubmit={handleRegister}>
             
                    <input
                        type="text"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                
                    <input
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                <button className="reg-btn" type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
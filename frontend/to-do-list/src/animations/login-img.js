import React from 'react';  
import { motion } from 'framer-motion';
import '../App.css';
import logo from "../assets/logo3.png";

const LoginImg = () => {
        return (
            <motion.div
    initial={{ opacity: 1, x: 0, y: 0 }}
    animate={{
        opacity: 1,
        x: [0, 500, 500, -500, -500, 0], // Moves between the points
        y: [0, 0, 0, 0, 0, 0], // Stays at the same y position
        // Flip only at the endpoints (500 and -500)
        scaleX: [1, 1, -1, -1, 1, 1], // Mirroring at the endpoints (500 and -500)
    }}
    transition={{
        duration: 12, // Total duration
        repeat: Infinity, // Infinite loop
        repeatType: "loop", // Continuous looping
        times: [0, 0.25, 0.5, 0.75, 1], // Synchronize changes
    }}
>
    <img className="login-form-img" src={logo} width={150} alt="logo" />
</motion.div>


        );
}

export { LoginImg };
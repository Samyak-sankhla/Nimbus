import React from "react";

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <a href="/to-do-list">Home</a>
            <h1>About Us</h1>
            <p>
                This is a simple to-do list application created by the Nimbus team.
            </p>
            <div className="links">
                <a href="mailto:nimbus@team.com" target="_blank">
                    <img src={require('./assets/gmail.png')} width={50} height={50} alt="email" />
                </a>
                <br></br>
                <a href="https://github.com/Samyak-sankhla" target="_blank" >
                    <img src={require('./assets/github.png')} width={50} height={50} alt="github" />
                </a>
            </div>

           
        </div>
    );
}

export default AboutUs;
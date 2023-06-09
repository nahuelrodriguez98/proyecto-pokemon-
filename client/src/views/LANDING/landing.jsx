import React from "react";
import { Link } from 'react-router-dom';
import './landing.style.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <div className="background-animation"></div>
            <div className="enter-button">
                <Link to="/home">
                    <img src="https://cdn-icons-png.flaticon.com/512/48/48821.png" alt="Back Home" />
                </Link>  
            </div>
            <p className="autor">BY RODRIGUEZ NAHUEL</p>
        </div>
    )
}

export default Landing;
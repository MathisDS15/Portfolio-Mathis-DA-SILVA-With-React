import React from 'react';
import './Home.css';
import { div } from 'framer-motion/client';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="home-picture">
                    <img src="/images/pp_circle.svg" className="home-profile-picture" alt="" />
                </div>
                <div className="home-text">
                    <h1>Hi, I am Mathis ! </h1>
                    <h2>I am currently looking for a professional contract as <br /> a Full-Stack engineer or Software engineer</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;
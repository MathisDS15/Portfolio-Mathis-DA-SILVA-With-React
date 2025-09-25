import React from 'react';
import './About.css';

function About () {
    return (
        <div className="about">
            <div className="about-container">
                <div className="about-title">
                    <h1>About Me</h1>
                </div>
                <div className="about-box">
                    <div className="about-box-title">
                        <h3>Learn to know me a little better</h3>
                    </div>
                    <div className="about-grid-subbox">
                        <div className="about-subbox">
                            <div className="about-subbox-card-1">
                                <h4>Who am I ?</h4>
                                <p>
                                    I am Mathis, an engineering student. I am 22 years-old. 
                                    I have had a passion for programming since the age of 15. 
                                    Very early on, I knew that I wanted to become a computer engineer, 
                                    and today I'm actively pursuing this project.
                                </p>
                            </div>
                            <div className="about-subbox-card-2">
                                <h4>Education</h4>
                                <li></li>
                                <li></li>
                                <li></li>
                            </div>
                            <div className="about-subbox-card-3">
                                <h4>Who do I want to be ?</h4>
                                <p>
                                   I want to be an engineer in computer science, yes ! 
                                    It's not a surprise. However, who do I want to be for 
                                    you ? I think I could be the next one among you. I would 
                                    ensure that I carry out the tasks entrusted to me efficiently. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
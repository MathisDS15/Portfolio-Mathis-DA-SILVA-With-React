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
                        <div className="about-subbox-card-1">
                            <div className="about-card-1-title">
                                <h4>Who am I ?</h4>
                            </div>
                            <div className="about-card-1-text">
                                <p>
                                    I am Mathis, an engineering student. I am 22 years-old. 
                                    I have had a passion for programming since the age of 15. 
                                    Very early on, I knew that I wanted to become a computer engineer, 
                                    and today I'm actively pursuing this project.
                                </p>     
                            </div>    
                        </div>                            
                        <div className="about-subbox-card-2">
                            <div className="about-card-2-text">
                                <li>January 2025 to June 2025 - Second year of engineering school</li>
                                <li>July 2025 to December 2025 - Internship at Uslter University</li>
                                <li>September 2024 to June 2025 - First year of engineering school</li>
                                <li>September 2022 to June 2024 - Preparatory </li>
                            </div>
                            <div className="about-card-2-title">
                                <h4>Education</h4>
                            </div>
                        </div>
                        <div className="about-subbox-card-3">
                            <div className="about-card-3-title">
                                <h4>Who do I want to be ?</h4>
                            </div>
                            <div className="about-card-3-text">
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
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/SkillsSection.css';

function SkillsSection() {
    return (
        <div id="skills-section">

            <section id="left-section">
                <h1>Skills</h1>
                <a href="https://drive.google.com/file/d/13y3u43FXboTpYytGEn3FEsPmE1orQQDv/view?usp=sharing" target="_blank">View Resume</a>
            </section>

            <section id="middle-section">
                <div className="title-box">
                    <h3>Development</h3>
                </div>

                <div className="line-list">
                    <div id="dev-line"></div>
                    <div className="skills-list">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript (ES6)</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C</li>
                            <li>JSON</li>
                            <li>HTTP</li>
                            <li>REST API</li>
                            <li>Unix/Bash</li>
                        </ul>
                    </div>
                  
                </div>
            </section>

            <section id="right-section">
                <div className="title-box">
                    <h3>Tools + Design</h3>
                </div>

                    <div className="line-list">
                        <div id="tools-line"></div>
                        <div className="tools-list">
                            <ul>
                                <li>Git</li>
                                <li>VS Code</li>
                                <li>Adobe XD</li>
                                <li>Adobe Illustrator/Photoshop</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                    </div>


                <div className="title-box">
                    <h3>Technologies</h3>
                </div>

                <div className="line-list">
                    <div id="tech-line"></div>
                    <div className="tech-list">
                        <ul>
                            <li>React.js</li>
                            <li>Bootstrap</li>
                            <li>Redux</li>
                        </ul>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default SkillsSection;
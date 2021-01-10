import React from 'react';
import ReactDOM from 'react-dom'; 
import '../css/LandingSection.css';

function LandingSection() {
    return (
        <main>
            <div id="main-left">
                <h2>Hi,<br/>I am Anant Jawanda</h2>
                <p>An aspiring front-end <u>developer</u> studying Computer Science at <u>Ryerson University</u>, 
                    who has a passion for connecting <u>design</u> & development. I am currently
                    looking for a internship for the Spring/Summer 2021 term.</p>
                    <div id='cta'>
                        <a id="connect-btn" href="#contact-section">Let's Connect!</a>
                        <div id="github-button-ctn">
                            <a href="https://github.com/anantjawanda" target="_blank" id="github-button"><img src={ require('../images/github-button.svg') } /></a>
                        </div>
                        <div id="linkedin-button-ctn">
                            <a href="https://www.linkedin.com/in/anantjawanda" target="_blank" id="linkedin-button"><img src={ require('../images/linkedin-button.svg') } /></a>
                        </div>
                    </div>
            </div>
            <div id="main-right">
                <img id="laptop" src={ require('../images/laptop.svg') }/>
                <img src={ require('../images/shadow.svg') }/>
            </div>
        </main>
        
    )
}

export default LandingSection;

import React from 'react';
import ReactDOM from 'react-dom';
import '../css/ProjectsSection.css';
import Language from './Language';


function ProjectThree(props) {

    const arr = props.langs;

    return (
        <div id="project">
            
            <div id="top-section">
                <h2>{props.projectName}</h2>
                <div id="lang-section">
                    
                    <Language lang="Javascript"/>
                    <Language lang="React.js"/>
                    <Language lang="GSAP"/>
                    <Language lang="Framer Motion"/>
                    
                </div>
            </div>

            <div id="project-description">
                <p>{props.description}</p>
            </div>

            <div id="project-links">
                <div id="project-site-link">
                    <a href="https://nocturnalfilms.ca/" target="_blank" rel="noopener noreferrer"><img src={ require('../images/viewsite-btn.svg') } /></a>
                </div>
                
            </div>


        </div>
    )
}

export default ProjectThree;
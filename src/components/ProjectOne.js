import React from 'react';
import ReactDOM from 'react-dom';
import '../css/ProjectsSection.css';
import Language from './Language';



function ProjectOne(props) {

    const arr = props.langs;

    return (
        <div id="project">
            
            <div id="top-section">
                <h2>{props.projectName}</h2>
                <div id="lang-section">
                    
                    
                    <Language lang="HTML"/>
                    <Language lang="CSS"/>
                    <Language lang="Javascript"/>
                    <Language lang="React.js"/>
                    
                </div>
            </div>

            <div id="project-description">
                <p>{props.description}</p>
            </div>

            <div id="project-links">
                <div id="project-github-link">
                        <a href="https://github.com/anantjawanda/" target="_blank"><img src={ require('../images/view-project-btn.svg') } /></a>
                    </div>
                <div id="project-site-link">
                    <a href="https://anantjawanda.github.io/Population-Index/" target="_blank"><img src={ require('../images/viewsite-btn.svg') } /></a>
                </div>
                
            </div>


        </div>
    )
}

export default ProjectOne;
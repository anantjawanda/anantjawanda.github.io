import React from 'react';
import ReactDOM from 'react-dom';
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import '../css/ProjectsSection.css';
import ProjectThree from './ProjectThree';

function ProjectsSection() {
    return (
        <div id="projects-section">

            <div id="project-content">
                <div id="section-title">
                    <h1>Projects</h1>
                    <div id="title-underline"></div>
                </div>

                <ProjectThree 
                    projectName="Nocturnal Films"
                        
                        description="A multi-page responsive website I developed for a Toronto-based production house,
                        which displays all of their up-to-date video work. The site includes usage of
                        React hooks, React Router, scroll-triggered GSAP transitions and animations. Through the use of components,
                        updating the website with new work is a quick and easy process, and automatically adjusts."
                />

                <div class="horizontal_dotted_line"></div>

                <ProjectOne 
                    projectName="Personal Portfolio"
                    

                    description="This single-page website was built using the React.js framework. With the use of props, components and many other React concepts, I was able to reuse multiple elements to efficiently condense my code."
                />

                
                <div class="horizontal_dotted_line"></div>

                <ProjectTwo 
                        projectName="Population Index"
                        
                        description="A fully ​responsive​ project consisted of concepts including: f​etch API,
                        JSON parsing, regex, working with DOM elements.​ The application fetches
                        geographical data from a live JSON file. When the user inputs a city,
                        the output is filtered to match the corresponding input alongside the city’s
                        population."
                    />      

            </div>
        </div>
    )
}

export default ProjectsSection;
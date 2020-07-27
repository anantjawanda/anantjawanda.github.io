import React from 'react';
import ReactDOM from 'react-dom';
import '../css/ProjectsSection.css';

function Language(props) {

    return (
        <div id="language">
            <div id="language-section">
                <h3>{props.lang}</h3>
            </div>

        </div>
    ) 
    
}

export default Language;
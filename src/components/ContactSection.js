import React from 'react';
import ReactDOM from 'react-dom';
import '../css/ContactSection.css';

function ContactSection() {
    return (
        <section id="contact-section">

            <div id="contact-content">
                <div id="section-seperator"></div>

                <div id="contact-title">
                    <h2>Let's Connect!</h2>
                    <p>I am currently looking for a Spring/Summer 2021 Internship opportunity, please feel free to get a hold of me through any of my social platforms below!</p>
                </div>

                <div id='cta'>
                            <div id="github-button-ctn">
                                <a href="https://github.com/anantjawanda" target="_blank"><img src={ require('../images/github-button.svg') } /></a>
                            </div>
                            <div id="linkedin-button-ctn">
                                <a href="https://www.linkedin.com/in/anantjawanda" target="_blank"><img src={ require('../images/linkedin-button.svg') } /></a>
                            </div>
                            <div id="mail-button-ctn">
                                <a href="mailto:anant.jawanda@ryerson.ca" target="_blank"><img src={ require('../images/mail-btn.svg') } /></a>
                            </div>
                            
                    </div>
                    <div id="contact-info">
                        <p>anant.jawanda@ryerson.ca<br/>647 986 4400</p>
                    </div>
            </div>
        </section>
    )
}

export default ContactSection;
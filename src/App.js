import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import LandingSection from './components/LandingSection'
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingSection/>
      <SkillsSection/>
      <ProjectsSection/> 
      <ContactSection/>
      <Footer/>
      <h3 id="construction">Site is currently undergoing responsiveness. <br/> Stay tuned!</h3>
    </div>
  );
}

export default App;

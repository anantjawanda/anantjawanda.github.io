import React from 'react';
import './css/App.css';
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
    </div>
  );
}

export default App;

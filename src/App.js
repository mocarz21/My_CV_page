import React from "react";
import Sidebar from "./modules/Sidebar/Sidebar";
import About from './pages/Home/About/About';
import TechStack from "./pages/TechStack/TechStack";
import Projects from './pages/Projects/Projects';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Education from "./pages/Education/Education";

const App =()=>{
  return(
    <>
      <Sidebar/>
      <About/>
      <TechStack/>
      <WorkExperience/>
      <Education/>
      <Projects/>
    </>
  )
}

export default App;

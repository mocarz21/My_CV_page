import React from "react";
import { useContext } from 'react';
import ThemeProvider, { ThemeContext } from "./ThemeProvider";
import Sidebar from "./modules/Sidebar/Sidebar";
import About from './pages/Home/About/About';
import TechStack from "./pages/TechStack/TechStack";
import Projects from './pages/Projects/Projects';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Education from "./pages/Education/Education";
import Testimonial from "./pages/Testimonial/Testimonial"
import Contact from './pages/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";
import NavbarMobileView from './modules/Sidebar/NavbarMobileView/NavbarMobileView'
import './App.scss'


const AppContent = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div id={theme} className={theme}>
      <NavbarMobileView />
      <Sidebar />
      <About />
      <TechStack />
      <WorkExperience />
      <Education />
      <Projects />
      <Testimonial />
      <Contact />
      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: '90px', backgroundColor: 'purple' }}
      />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
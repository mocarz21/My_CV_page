import "./SidebarList.scss";
import { FcHome, FcDeployment, FcBusinessman, FcBiotech, FcGraduationCap, FcTodoList, FcDiploma2, FcContacts } from "react-icons/fc";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const SidebarList = ({expandSidebar}) =>{

  return(
    <>
      {expandSidebar ? 
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src="/img.jpg" alt="Profile picture"/>
          </div>
          <ul>   
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                <FcHome size={25}/>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                <FcBusinessman size={25}/>About 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="work" spy={true} smooth={true} duration={100} offset={-100}>
                <FcDeployment size={25}/>Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tech" spy={true} smooth={true} duration={100} offset={-100}>
                <FcBiotech size={25}/>Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
                <FcGraduationCap size={25}/>Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
                <FcTodoList size={25}/>Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonial" spy={true} smooth={true} duration={100} offset={-50}>
                <FcDiploma2 size={25}/>Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={100} offset={-250}>
                <FcContacts size={25}/>Contact
              </Link>
            </li>
          </ul>
        </div>
        :
        <div className="navbar-items-only-icon">
          <ul>
            <li className="nav-item">
              <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
                <FcHome size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
                <FcBusinessman size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="work" spy={true} smooth={true} duration={100} offset={-100}>
                <FcDeployment size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tech" spy={true} smooth={true} duration={100} offset={-100}>
                <FcBiotech size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
                <FcGraduationCap size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
                <FcTodoList size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonial" spy={true} smooth={true} duration={100} offset={-100}>
                <FcDiploma2 size={25}/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={100} offset={0}>
                <FcContacts size={25}/>
              </Link>
            </li>
          </ul>
        </div>
      }
    </>
  )
}

export default SidebarList;
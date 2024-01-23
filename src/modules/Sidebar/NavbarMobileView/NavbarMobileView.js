import "./NavbarMobileView.scss"
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome, FcDeployment, FcBusinessman, FcBiotech, FcGraduationCap, FcTodoList, FcDiploma2, FcContacts } from "react-icons/fc";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Switch from "react-switch";
import {ThemeContext} from '../../../ThemeProvider'
import { IoSunnyOutline, IoMoon } from "react-icons/io5";


const NavbarMobileView = () =>{

  const { theme, changeTheme } = useContext(ThemeContext)
  const [ open, setOpen] = useState(false)

  return(
    <div className="mobile-view-navbar">
      <div className="navbar-header ">
        <p><GiHamburgerMenu size={25} onClick={e=>setOpen(!open)}/></p>
      </div>
      {open && <div className="mobile-nav">
        <ul>
          <li className="nav-item-mobileview">
            <Link to="home" spy={true} smooth={true} duration={100} offset={-100}>
              <FcHome size={25}/>Home
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="about" spy={true} smooth={true} duration={100} offset={-100}>
              <FcBusinessman size={25}/>About 
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="work" spy={true} smooth={true} duration={100} offset={-100}>
              <FcDeployment size={25}/>Work Experience
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="tech" spy={true} smooth={true} duration={100} offset={-100}>
              <FcBiotech size={25}/>Tech Stack
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="education" spy={true} smooth={true} duration={100} offset={-100}>
              <FcGraduationCap size={25}/>Education
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="projects" spy={true} smooth={true} duration={100} offset={-100}>
              <FcTodoList size={25}/>Projects
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="testimonial" spy={true} smooth={true} duration={100} offset={-100}>
              <FcDiploma2 size={25}/>Testimonial
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="contact" spy={true} smooth={true} duration={100} offset={50}>
              <FcContacts size={25}/>Contact
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Switch
              checked={theme ==='light'}
              onChange={changeTheme}
              uncheckedIcon={
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "blue",
                  paddingRight: 2
                }}>
                  <IoMoon  />
                </div>
    }
              checkedIcon={
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "orange",
                  paddingRight: 2
                }}>
                  <IoSunnyOutline/>
                </div>
              }
              className="react-switch"
              id="icon-switch"
            />
          </li>
        </ul>
      </div>}

    </div>
  )
}

export default NavbarMobileView;
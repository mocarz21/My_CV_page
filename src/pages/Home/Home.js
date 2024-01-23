import './Home.scss'
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import {ThemeContext} from '../../ThemeProvider'
import { IoSunnyOutline, IoMoon } from "react-icons/io5";
import Slide from 'react-reveal/Slide';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Home = () =>{

  const { theme, changeTheme } = useContext(ThemeContext)
  

  return(
    <div className='container-fluid home' id='home'>
      <div className='theme-change' onClick={changeTheme}>
        {theme === 'light' ?  (<p ><IoMoon size={40}/></p>) : (<p className='sun-theme-icon'><IoSunnyOutline size={40}/></p>) }
      </div>
      <div className='container home-content'>
        <Slide right>
          <h1>Hi I'm Adam</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Backend Developer',
                  'Full Stack Developer',
                  'IT Trainer',
                  'Curriculum Developer',
                  'Custom Program Instructor'
                ],
                autoStart: true,
                loop: true,
                delay: 30,
              }}
            />
          </h2>
        </Slide>
        <Slide bottom>
          <div className='button-for-action'>
            <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
              <div className='button hire-me-button'>
                Hire me
              </div>
            </Link>
            <div className='button get-resume-button'>
              <a href='./CVAdamEn.pdf' download='Mocarski_CV.pdf'>Get Resume</a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Home;
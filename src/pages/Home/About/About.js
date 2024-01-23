import './About.scss';
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';

const About = () =>{

  return(
    <Flip top>
      <div className='container about-section' id='about'>
        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='about-image'>
              <img src='./img.jpg' alt='profile'/>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <div className='about-details'>
              <Fade left>
                <div className='about-title'>
                  <h5>About me:</h5>
                  <span className='line'></span>
                </div>
              </Fade>
              <Roll top>
                <p> Hello! I'm Adam, an enthusiastic front-end developer for whom coding is not just a job but a true passion. 
                    I draw inspiration from my fascination with front-end, and each new day is an opportunity for me to acquire new skills. 
                    The experience I've gained encompasses not only the front-end but also the back-end. Working on diverse projects, 
                    from individual websites to comprehensive online applications, has given me insight into the full spectrum of software development. 
                    Through my experience as the founder of Power IT Training, where I lead training sessions and manage projects, 
                    I've learned not only the technical aspects of the job but also how inspiring it is to share knowledge with others. 
                    My skills and commitment are ready for new projects, and my approach will bring invaluable value. 
                    I'm not only seeking the next challenge but also an opportunity to co-create something exceptional.
                </p>
              </Roll>
            </div>
          </div>
        </div>
      </div>
    </Flip>
  )
}

export default About;
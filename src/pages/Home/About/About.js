import './About.scss'

const About = () =>{

  return(
    <div className='container about-section'>
      <div className='row'>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
          <div className='about-image'>
            <img src='./img.jpg' alt='profile'/>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
          <div className='about-details'>
            <div className='about-title'>
              <h5>About me:</h5>
              <span className='line'></span>
            </div>
            <p> Hello! I'm Adam, an enthusiastic front-end developer for whom coding is not just a job but a true passion. 
                I draw inspiration from my fascination with front-end, and each new day is an opportunity for me to acquire new skills. 
                The experience I've gained encompasses not only the front-end but also the back-end. Working on diverse projects, 
                from individual websites to comprehensive online applications, has given me insight into the full spectrum of software development. 
                Through my experience as the founder of Power IT Training, where I lead training sessions and manage projects, 
                I've learned not only the technical aspects of the job but also how inspiring it is to share knowledge with others. 
                My skills and commitment are ready for new projects, and my approach will bring invaluable value. 
                I'm not only seeking the next challenge but also an opportunity to co-create something exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
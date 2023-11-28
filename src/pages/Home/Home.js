import './Home.scss'
import Typewriter from 'typewriter-effect';

const Home = () =>{
  return(
    <div className='container-fluid home'>
      <div className='container home-content'>
        <h1>Hi I'm a</h1>
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
        <div className='button-for-action'>
          <div className='button hire-me-button'>
            Hire me
          </div>
          <div className='button get-resume-button'>
            <a href='./CVAdamEn.pdf' download='Mocarski_CV.pdf'>Get Resume</a>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
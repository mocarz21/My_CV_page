import './WorkExperience.scss'
import { GiDiamondHard } from "react-icons/gi";
import { PiStudentDuotone } from "react-icons/pi";
import { GiStairsGoal } from "react-icons/gi";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkExperience = () =>{

  const data = [
    {
      companyname: 'Google',
      position:'Full stack developer',
      des: 'sad alskda sfbka ahdaldsada d',
      year: '2018-2019',
      icon: <GiDiamondHard/>,
      techskills:[
        {
          techname: 'Node JS'
        },
        {
          techname: 'Bootstrap'
        },
        {
          techname: 'React JS'
        },
        {
          techname: 'Material UI'
        },
      ]
    },
    {
      companyname: 'youtube',
      position:'Full stack developer',
      des: 'sad alskda sfbka ahdaldsada d',
      year: '2018-2019',
      icon: <GiDiamondHard/>,
      techskills:[
        {
          techname: 'Node JS'
        },
        {
          techname: 'Bootstrap'
        },
        {
          techname: 'React JS'
        },
        {
          techname: 'Material UI'
        },
      ]
    },
    {
      companyname: 'Facebook',
      position:'Full stack developer',
      des: 'sad alskda sfbka ahdaldsada d',
      year: '2018-2019',
      icon: <GiDiamondHard/>,
      techskills:[
        {
          techname: 'Node JS'
        },
        {
          techname: 'Bootstrap'
        },
        {
          techname: 'React JS'
        },
        {
          techname: 'Material UI'
        },
      ]
    }
  ]

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
    "Tomato"
  ]
  return(

    <div className='container workexperience-section'>
      <div className='section-title'>
        <h5>Work experience</h5>
        <span className='line'></span>
      </div>
      <div className='timeline-section'>
        <VerticalTimeline lineColor='#FF1042'> 
          {data.map((item, index)=>(
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index+1], color: '#fff' }}
              contentArrowStyle={{ borderRight: '17px solid  gold' }}
              date={item.year}
              dateClassName='date-class'
              iconStyle={{ background: colors[index], color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
              <div className="row">
                {item.techskills && item.techskills.map((item, index) =>(
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="tech-skills">
                      <p>{item.techname}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              icon={<GiStairsGoal />}
            />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default WorkExperience;
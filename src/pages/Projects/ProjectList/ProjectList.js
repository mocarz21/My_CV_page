import React, {useState} from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import './ProjectList.scss'

const ProjectList = ({name, des, projectlink, techused}) =>{

  const [show , setShow] =useState(false)

  const handleShowAndColapse = () =>{
    setShow(!show);
  }
  return(
    <div className={show ? "project-list project-list-opened" : "project-list "} onClick={handleShowAndColapse}>
      <div className="title-and-colapse-option">
        <h5>{name}</h5>
        { show ? <p><FcCollapse size={20}/></p> : <p><FcExpand size={20}/></p> }
      </div>
      <div className="description" onMouseEnter={()=> {setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
        {!show & des.length > 70 ? 
          <p>{des.substring(0,65) } .....<p className="read-more"><b>Read More</b></p></p>
          : 
          <div className="row"><p>{des}</p><p> </p></div> 
        }
      </div>
      <div className="row">
        {techused && techused.map((item, index) =>(
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="tech-used-in-project">
              <p>{item.techname}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Live-demo-button">
          <a href='#'>Live Demo</a>
      </div>
    </div>
  )
}

export default ProjectList;
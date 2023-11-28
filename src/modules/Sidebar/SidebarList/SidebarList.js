import "./SidebarList.scss";
import { FcHome, FcDeployment, FcBusinessman, FcBiotech, FcGraduationCap, FcTodoList, FcDiploma2, FcContacts } from "react-icons/fc";

const SidebarList = ({expandSidebar}) =>{

  return(
    <>
      {expandSidebar ? 
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src="/img.jpg" alt="Profile picture"/>
          </div>
          <ul>
            <li className="nav-item"><FcHome size={25}/>Home</li>
            <li className="nav-item"><FcBusinessman size={25}/>About</li>
            <li className="nav-item"><FcDeployment size={25}/>Work Experience</li>
            <li className="nav-item"><FcBiotech size={25}/>Tech Stack</li>
            <li className="nav-item"><FcGraduationCap size={25}/>Education</li>
            <li className="nav-item"><FcTodoList size={25}/>Projects</li>
            <li className="nav-item"><FcDiploma2 size={25}/>Testimonial</li>
            <li className="nav-item"><FcContacts size={25}/>Contact</li>
          </ul>
        </div>
        :
        <div className="navbar-items-only-icon">
          <ul>
            <li className="nav-item"><FcHome size={25}/></li>
            <li className="nav-item"><FcBusinessman size={25}/></li>
            <li className="nav-item"><FcDeployment size={25}/></li>
            <li className="nav-item"><FcBiotech size={25}/></li>
            <li className="nav-item"><FcGraduationCap size={25}/></li>
            <li className="nav-item"><FcTodoList size={25}/></li>
            <li className="nav-item"><FcDiploma2 size={25}/></li>
            <li className="nav-item"><FcContacts size={25}/></li>
          </ul>
        </div>
      }
    </>
  )
}

export default SidebarList;
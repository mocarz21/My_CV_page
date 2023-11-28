import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Home from '../../pages/Home/Home'
import SidebarList from './SidebarList/SidebarList';
import './Sidebar.scss'


const Sidebar =()=>{

  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleExpandClick = () =>{
    setExpandSidebar(!expandSidebar)
  }


  return(
    <div className='container-fluid sidebar-section'>
      <div className= {expandSidebar ? 'sidebar-expand sidebar':'sidebar'}>
        <div className='icon-for-sidebar-expand-and-colapse'>
          {expandSidebar ? 
            <p onClick={handleExpandClick}><BsChevronLeft size={30} /></p> 
            :
            <p onClick={handleExpandClick}><BsChevronRight size={30} /></p>
          }
        </div>
        <SidebarList expandSidebar={expandSidebar}/>
      </div>
      
      <div className='container'>
        <Home/>
      </div>
    </div>
  )
}
export default Sidebar;
import ProjectList from './ProjectList/ProjectList'
import './Projects.scss'

const Projects = () => {

  const data = [
    {
      name: 'Carpentry workshop',
      des:'Woodworking Workshop Website',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'Library Management App',
      des:'An online platform dedicated to libraries, enabling both users and staff to efficiently manage resources. Users can freely browse available titles, handle borrowings, and check the list of accessible books. From the staff perspective, the platform facilitates seamless administration, adding new items to the database, and handling borrowing and return processes.',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
        {
          techname:'Material UI'
        },
      ]
    },
    {
      name: 'Auto repair shop',
      des:'Car repair workshop website providing customers with information about services, opening hours, and contact details.',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name:'Rental Management Platform',
      des:'Online platform designed for property management, offering a seamless experience for both property owners and renters. Property owners can effortlessly list and manage their properties, while renters can browse available listings, manage bookings, make payments, and provide feedback. From the users perspective, the platform provides a user-friendly interface for adding and managing rental properties, handling transactions, and sharing feedback',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'Portal with photo',
      des:'Platform for sharing and downloading photos, where users can easily browse, download, and manage images.',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Material UI'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'Furniture shop',
      des:'Furniture shop website where customers can browse, purchase, and find information about products, showroom hours, and contact details.',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'Pizza Online Ordering',
      des:'Platform for Pizza Online Ordering, allowing customers to easily browse menu options, place orders, and arrange delivery or pickup.',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'Online Ticket Booking',
      des:'Online Ticket Booking platform, enabling users to conveniently browse, select, and book tickets for various events',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    },
    {
      name: 'product-personalizer',
      des:'Product Personalizer platform, empowering users to customize and personalize their chosen products according to individual preferences and specifications',
      projectlink:'',
      techused:[
        {
          techname:'Expres js'
        },
        {
          techname:'React js'
        },
        {
          techname:'Node.js'
        },
        {
          techname:'Bootstrap'
        },
        {
          techname:'MySQL'
        },
      ]
    }

  ]


  return(

    <div className='container'>
      <div className='section-title'>
        <h5>Projects</h5>
        <span className='line'></span>
      </div>
      <div className='row'>
        {data.map((item,index)=>(
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <ProjectList {...item}/>
          </div>
         ))}
      </div>
    </div>

  )
}

export default Projects ;

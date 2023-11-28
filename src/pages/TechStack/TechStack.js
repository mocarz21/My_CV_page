import React from 'react'
import { useState } from 'react'
import './TechStack.scss'

const TechStack = () =>{

  const [ showMoreTechStack, setShowMoreTechStack ] = useState(9)

  const loadMore = () =>{
    setShowMoreTechStack((prev)=> prev + 3);
  }

  const data = [
    {
      name: 'full stack developer'
    },
    {
      name: 'react'
    },
    {
      name: 'JS'
    },
    {
      name: 'python'
    },
    {
      name: 'Node js'
    },
    {
      name: 'full stack developer'
    },
    {
      name: 'react'
    },
    {
      name: 'JS'
    },
    {
      name: 'python'
    },
    {
      name: 'Node js'
    },
    {
      name: 'full stack developer'
    },
    {
      name: 'react'
    },
    {
      name: 'JS'
    },
    {
      name: 'python'
    },
    {
      name: 'Node js'
    },
  ]

  const colors = [
    "#E04221",
    "#453AA6",
    "#56A63A",
    "#853AA6 ",
    "#A63A92 ",
    "#CB2647",
    "#F31B05",
    "#F3EF05",
    "#05EFF3",
    "#3F05F3",
    "#8E05F3",
    "#0D6546",
    "#70950D",
    "#95450D",
    "#7356F4",
  ]

  return(
    <div className='container tech-stack-section'>
      <div className='section-title'>
        <h5>Tech Stack</h5>
        <span className='line'></span>
      </div>
      <div className='row'>
        {data.slice(0,showMoreTechStack).map((item,index)=>(
          <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
            <div className='tech-content'>
              <span className='tech-number' style={{backgroundColor: colors[index]}}>
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {showMoreTechStack < data.length &&<div className='load-more-tech-stack' onClick={loadMore}>
        Load more
      </div>}
    </div>
  )
}

export default TechStack;
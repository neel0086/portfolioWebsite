import React, { useState } from 'react'
import './Projects.css'
import { ProjectData } from './Projectdata'
import ProjectDisplay from './ProjectDisplay'


function Projects() {
  return (
      <div id='Projects'>
      <div className='p-container'>
          <h1>PROJECTS</h1>
    <div className='project-wrapper'>
        {ProjectData.map((pro) =>{
           return  <ProjectDisplay detail={pro}/>
        })}
    </div>
    </div>
    </div>
  )
}

export default Projects
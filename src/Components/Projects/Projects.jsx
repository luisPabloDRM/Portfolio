import React from 'react'
import ReactPlayer from 'react-player'
import { projects } from '../../Projects'

import './Projects.scss'

const Projects = () => {
    
  return (
    <div >
        <h1>My Projects</h1>
      <div >
      <div>
               <div className="container_video">
                 {projects.map((item)=>

                    <div className="card" >
                          <ReactPlayer url={item.url } controls width="100%"
        height="33%" />
                        <div className="card-body" >
                            <p className="tag">{item.primaryGenreName}</p>
                            <h3 className='title'>{item.name}</h3>
                            <p className='text1' >{item.description}</p>
                       
                        </div>

                    </div>
                 )}
                   
                   
               </div>
           </div>
        


    </div>
    </div>
  
  )
}

export default Projects
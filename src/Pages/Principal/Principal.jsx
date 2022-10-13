import React from 'react'
import {Presentation} from '../../Components/Presentation/Presentation'
import {MySelf} from '../../Components/MySelf/MySelf'
import {Education} from '../../Components/Education/Education'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'


import '../Principal/Principal.scss'




const Principal = () => {



  return (
    <>
        
       <div className='div_prin' >
        <Presentation />
       </div>
     
       <div className='div_prin' >
        <MySelf/>

       </div>
       <div className='div_prin' >
        <Education/>

       </div>
       <div className='div_prin' >
        
          <Skills />
        
       </div>

       <div className='div_prin' >
        
          <Projects />
        
       </div>

    </>
  )
}

export default Principal
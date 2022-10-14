import React from 'react'
import './Skills.scss'

const Skills = () => {
    
  return (
    <> 
    

    
    <h1>SKills</h1>
   
   <div className='skill_bars' >
    <div className='bar' >
        <div className='info' ><img  className="img_skills" src="https://cdn-icons-png.flaticon.com/512/1216/1216733.png" alt="" /></div>
        <div className='progress-line html' > <span></span> </div>
    </div>
    
    <div className='bar' >
        <div className='info' ><img className="img_skills"  src="https://cdn-icons-png.flaticon.com/512/919/919826.png" alt="" /></div>
        <div className='progress-line css' > <span></span> </div>
    </div>


        <div className='bar' >
        <div className='info' ><img  className="img_skills" src="https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png" alt="" /></div>
        <div className='progress-line Javascript' > <span></span> </div>
    </div>

    <div className='bar' >
        <div className='info' ><img  className="img_skills" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" /></div>
        <div className='progress-line react' > <span></span> </div>
    </div>
</div>



   
    </>
  
  )
}

export default Skills
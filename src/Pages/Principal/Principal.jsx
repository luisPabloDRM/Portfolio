import React from 'react'
import {Presentation} from '../../Components/Presentation/Presentation'
import {MySelf} from '../../Components/MySelf/MySelf'
import {Education} from '../../Components/Education/Education'
const Principal = () => {
  return (
    <>
        
       <div>
        <Presentation />
       </div>
       <div>
        <MySelf/>

       </div>
       <div>
        <Education/>

       </div>

    </>
  )
}

export default Principal
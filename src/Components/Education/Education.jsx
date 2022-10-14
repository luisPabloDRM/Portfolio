import React from 'react'

import  './Education.scss'

export const Education = () => {
  return (
    <>
    <h1 className='big_title'>
        Education
    </h1>
    <div className='container_ed' >
        <div className='info_ed'>
        <h2 className='title' >
            FullStack Developer
        </h2>
        <h3 className='apen_ed' >
            Upgrade-Hub
        </h3>
        <p className='text1' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Odio adipisci reiciendis dolore pariatur modi officia rerum nulla debitis est error aspernatur voluptate sit inventore ab perferendis, 
            ipsa explicabo natus dolorem!
        </p>
        </div>
        

        <img className='img_edu' src="https://cdn.discordapp.com/attachments/965645891820212318/1029096310269288578/Captura_de_Pantalla_2022-10-10_a_las_20.18.58-removebg-preview.png" alt="upgrade" />
    </div>
    <div className='container_ed' >
    <div className='info_ed'>
        <h2 className='title' >
            Maestro Educacion primaria
        </h2>
        <h3 className='apen_ed' >
            Universidad de Valladolid
        </h3>
        <p className='text1' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Odio adipisci reiciendis dolore pariatur modi officia rerum nulla debitis est error aspernatur voluptate sit inventore ab perferendis, 
            ipsa explicabo natus dolorem!
        </p>
    </div>

        
        <img className='img_edu' src="https://www.siguemars.es/wp-content/uploads/2021/03/logoUVA.png" alt="uva" />
    </div>
    <div className='container_ed' >
    <div className='info_ed'>
        <h2 className='title' >
                First Certificate in English    
        </h2>
        <h3 className='apen_ed' >
            Cambridge
        </h3>
        <p className='text1' >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Odio adipisci reiciendis dolore pariatur modi officia rerum nulla debitis est error aspernatur voluptate sit inventore ab perferendis, 
            ipsa explicabo natus dolorem!

        </p>
    </div>
       
        <img className='img_edu' src="https://www.tunecesitasingles.com/wp-content/uploads/2019/03/fce-cambridge-valladolid.png" alt="First" />
    </div>
    
    </>
  )
}

export default Education
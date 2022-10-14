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
        Intensive course of 6 months duration, in which we start from the basics (HTML & CSS) until we reach the final project, a complete App (front and back)
         passing through Javascript, in the Angular and React front-end and in the Back- end NodeJs and PhP with Sinfony.
         We study relational and non-relational databases such as MySQL and MongoDB. 
         Finally we learned about agile methodologies (Agile)
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
        The Degree in Primary Education Teaching offers you the academic and human 
        training to be a Teacher in the educational stage from 6 to 12 years, a stage in which the basic knowledge of our culture is acquired, 
        helping them to understand the world around them through of the observation and study of nature, 
        artistic expression, music, language, literature, history or the practice of sports.
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
        First Certificate in English is one of the English level exams, affiliated with the University of Cambridge, 
        which is equivalent to level B2 of the Common European Framework of Reference for Languages. 
        Its approval proves the ability to speak the English language efficiently in society.

        </p>
    </div>
       
        <img className='img_edu' src="https://www.tunecesitasingles.com/wp-content/uploads/2019/03/fce-cambridge-valladolid.png" alt="First" />
    </div>
    
    </>
  )
}

export default Education
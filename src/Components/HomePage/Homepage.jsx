import React, { useState } from 'react'
import { ReactDOM } from 'react';
import { NavLink } from 'react-router-dom'
import Principal from '../../Pages/Principal/Principal';


import './Homepage.scss'

export const Homepage = () => {

  

  
  return (
    <>

    <div className='container'>
        <span>L</span>
        <span>P</span>
        <span>D</span>
        <span>R</span>
        <span>M</span>

    </div>
    <div>
        <NavLink to = '/main'><button>Mi PortFolio</button></NavLink>
    </div>


    </>
    
  )
}

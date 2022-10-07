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
        <span>U</span>
        <span>I</span>
        <span>S</span>
        <span>&nbsp;</span>
        <span>P</span>
        <span>A</span>
        <span>B</span>
        <span>L</span>
        <span>O</span>

    </div>
    <div>
        <NavLink to = '/main'><button>Click to know me</button></NavLink>
    </div>


    </>
    
  )
}

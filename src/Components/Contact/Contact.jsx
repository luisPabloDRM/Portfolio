import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile,  } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


import './Contact.scss'

const Contact = () => {
   

 
  return (
    <footer>
    <div className="footer-content">
        <h3>Luis Pablo  Dev</h3>
        <p>This is a portfolio that is made with the same measure of illusion, motivation, humility and desire to continue learning..</p>
        <ul className="socials">
            <li><a href='lp.delriom@gmail.com'><FontAwesomeIcon icon={faEnvelope} /></a></li>
            <li><p><FontAwesomeIcon icon={faMobile} /> </p></li>
            <li><a href='https://github.com/luisPabloDRM' ><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href='https://www.linkedin.com/in/lpdrm/'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy; LPDRM  </p>
                <div className="footer-menu">
                  <ul className="f-menu">
                    <li><NavLink to = '/about'>About Me</NavLink></li>
                    <li><NavLink to = '/skills'>Skills</NavLink></li>
                    <li><NavLink to = '/projects'>Projects</NavLink></li>
                    <li><NavLink to = '/'>Home</NavLink></li>
                    
                  </ul>
                </div>
    </div>
  

</footer>

  );
};

export default Contact
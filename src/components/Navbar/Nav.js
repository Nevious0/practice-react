import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
         <h2>MASHOTA</h2>
         <ul>
             <Link to="/" className="navStyle"><li>Home</li></Link>
             <Link to="/portfolio" className="navStyle"><li>Portfolio</li></Link>
             <Link to="/contact" className="navStyle"><li>Contact</li></Link>
             </ul>   
        </nav>
    )
}

export default Nav

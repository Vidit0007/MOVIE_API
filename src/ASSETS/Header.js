import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
      {/* <a href="#">Logo</a> */}
      <nav className='nav'>
        
            <NavLink to="home" style={{textDecoration:"none", fontFamily:"monospace",fontSize:"2em", color:"white",paddingBottom:"20px"}}> HOME</NavLink>
            <br/>
            <NavLink to="/about" style={{textDecoration:"none", fontFamily:"monospace",fontSize:"2em", color:"white",paddingBottom:"20px"}}> ABOUT</NavLink>
            <br/>
        
            <NavLink to="/contact" style={{textDecoration:"none", fontFamily:"monospace",fontSize:"2em", color:"white",paddingBottom:"20px"}}> CONTACT</NavLink>
            <br/>
        
            <NavLink to="/dashboard" style={{textDecoration:"none", fontFamily:"monospace",fontSize:"2em", color:"white",paddingBottom:"20px"}}> DASHBOARD</NavLink>
            <br/>
         
      </nav>
    </header>
    
    </>
  )
}

export default Header
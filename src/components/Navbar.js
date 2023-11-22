import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <h1 className='navbarTitle'>
            devjobs
        </h1>
        <div className='hamburgerIcon'>
          <GiHamburgerMenu/>
        </div>

    </div>
  )
}

export default Navbar
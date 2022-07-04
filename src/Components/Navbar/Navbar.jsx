import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from "react-scroll"


const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Rohit</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                  <Link spy={true} to={Navbar} smooth={true} activeClass={activeClass}>
                    <li>Home</li>
                  </Link>
                  <li>Services</li>
                  <li>Experience</li>
                  <li>Portfolio</li>
                  <li>Testemonial</li>
                </ul>
            </div>
            <button className="button n-button">
              Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar
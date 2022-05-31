import React, { useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../../image/logo.jpg'
function Navbar() {
    const [web,setWeb] = useState(false)
    const inputRef = useRef();
    
  return (
    <div>
        <nav className="navbar">
            <div className="n-container">
                <div className="n-logo">
                    
                    <img src={logo} alt="" />
                    <span style={{margin:'10px'}}>NEEL</span>
                </div>
                <ul style={{listStyle:'none'}} className={web ? 'n-menu active' : 'n-menu'}>
                <Link spy={true} to={Navbar} smooth={true}><li className='n-item'>HOME</li></Link>
                <Link spy={true} to="Skills" smooth={true}><li className='n-item'>SKILLS</li></Link>
                <Link spy={true} to="Projects" smooth={true}><li className='n-item'>PROJECTS</li></Link>
                

            </ul>
            </div>
            <div id="menuToggle" onClick={() => setWeb(!web)}>
                <input type="checkbox" ref={inputRef}/>
                <span></span>
                <span></span>
                <span></span>
          </div>
        </nav>
    </div>
    
  )
}

export default Navbar
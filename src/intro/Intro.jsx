import React from 'react'
import './Intro.css'
import github from '../image/github.png'
import linkedIn from '../image/linkedIn.png'
import insta from '../image/insta.png'
import neel from '../image/Neel.png'
import Particles from "react-tsparticles";
import particleConfig from "../config/particles";
import { loadFull } from "tsparticles";
import Tilt from "react-tilt";
// import vector from '../image/vector.png'
// import vector1 from '../image/vector1.png'
// import FloatingImg from './Floating/FloatingImg'
// import icon from '../image/icon.png'
// import icon1 from '../image/icon1.png'
// import { motion } from 'framer-motion'

function Intro() {
    const transition = {duration:1,type:"string"}
    const particlesInit = async (main) => {
        await loadFull(main);
      };
  return (
    <section id='home'>
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
      />
        <div className='h-container'>
            <h3>Hy I am <br /><span> Neel Mehta</span></h3>
            
            <div className="connect">
                <ul className='connect-icon'>
                    <li><a href="https://www.linkedin.com/in/neel-mehta-71857b1bb/" target='blank'><img src={linkedIn}  /></a></li>
                    <li><a href="https://github.com/neel0086" target='blank'><img src={github}  /></a></li>
                    <li><a href="https://www.instagram.com/neelmehta08/" target='blank'><img src={insta}  /></a></li>
                </ul>
            </div>
        
        </div>
        <div className='h-img'>
            <div>
            <Tilt options={{ max: 50, scale: 1 }} className="Tilt">
                <img src={neel} alt="image" />
            </Tilt>
            </div>
        </div>

    </section>
  )
}

export default Intro
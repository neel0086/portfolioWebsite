import React from 'react'
import Scard from '../Cards/Scard'
import './Skills.css'
import web from '../../image/mern.png'
import git from '../../image/git.png'
import gitIcon from '../../image/git.svg'
import cppIcon from '../../image/cpp.png'
import githubIcon from '../../image/github1.png'
import mernIcon from '../../image/mernstack.png'
import phpIcon from '../../image/php.png'
import react from '../../image/react.svg'
import mongo from '../../image/mongodb.svg'
import nodejs from '../../image/nodejs.svg'
import express from '../../image/express.png'
import linuxIcon from '../../image/linux.png'
import htmlIcon from '../../image/html.svg'
import jsIcon from '../../image/javascript.svg'
import pro from '../../image/pro.png'
import Resume from '../../image/RESUME.pdf'
import python from '../../image/python.png'
import { motion } from 'framer-motion'
import Tilt from "react-tilt";
function Skills() {
    const transition = {duration:1,type:"string"}
  return (
    <div id="Skills" className='skill'>
        <div className='talent'>
            <div className="skill-left">
                <span>MY, SKILLS</span>
                <span>
                    What I am good at?
                </span>
                <span>
                    What Technical skills do I have?
                </span>
                    <a href={Resume} download>
                
                <button className='button s-button'>RESUME</button>
                </a>
            </div>
            <div className="skill-right">
                <motion.div 
                    initial={{top:'-5rem'}}
                    whileInView={{top:'2rem'}}
                    transition={transition}
                style={{left:'7rem',top:'2rem'}}>
                    <Scard 
                        emoji={web}
                        heading={"WEB DEV"}
                        details={[{detail:"REACTJS",img:react},
                                {detail:"NODEJS",img:nodejs},
                                {detail:"EXPRESS",img:express},
                                {detail: "MONGO",img: mongo},
                               {detail:"HTML & CSS",img:htmlIcon},
                               {detail:"JAVASCRIPT",img:jsIcon},
                               {detail:"PHP, SQL",img:phpIcon},
                               
                            ]}
                    />
                </motion.div>
                <motion.div 
                    initial={{left:'-12rem'}}
                    whileInView={{left:'-10rem'}}
                    transition={transition} style={{left:'-10rem',top:'10rem'}}>
                    <Scard 
                        emoji={pro}

                        heading={"PRORAMMING"}
                        details={[{detail: "PYTHON",img: python},
                               {detail:"C++",img:cppIcon},
                            ]}
                    />
                </motion.div>
                
                <motion.div 
                    initial={{left:'17rem'}}
                    whileInView={{left:'25rem'}}
                    transition={transition} style={{left:'25rem',top:'12rem'}}>
                    <Scard 
                        emoji={git}
                        heading={"SOFTWARE"}
                        details={[{detail: "GIT",img: gitIcon},
                               {detail:"GITHUB",img:githubIcon},
                               {detail:"LINUX",img:linuxIcon},
                            ]}
                    />
                </motion.div>

            </div>
        </div>
        {/* <div className='exp'>
            <div className='s-bar'>
                <div className="circle">10+</div>
                <span>Projects</span>
                <span>Completed</span>
            </div>
            <div className='s-bar'>
                <div className="circle">20+</div>
                <span>Projects</span>
                <span>Completed</span>
                
            </div>
        </div> */}
    </div>
  )
}

export default Skills
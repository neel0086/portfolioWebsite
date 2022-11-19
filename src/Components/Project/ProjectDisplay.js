import React, { useState } from 'react'
import { motion } from 'framer-motion' 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import './ProjectDisplay.css'
import githubIcon from '../../image/githubP.png'
import linkedInIcon from '../../image/linkedIn.png'
import WebIcon from '../../image/Web.png'

function ProjectDisplay({detail}) {
    console.log(detail)
    const transition = {duration:2,type:"string"}
    const [slide,setSlide] = useState(0)
    const len=detail.images.length
  return (
    <div className="p-item">
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={transition}
                style={{opacity:1}}
                className="wrap">
                <div>
                    <div className="i-carousel">
                        <div className="image">
                            
                            <span onClick={(e) =>setSlide(slide-1==-1 ? len-1:slide-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setSlide((slide+1)%len)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {detail.images.map((pic,index)=>{
                                return (
                                <div className={index==slide ? 'slide active' :'slide'} key={index}>
                                    {index==slide && (
                                    <img src={pic} />
                                    )}
                                    
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            {detail.techUsed.map((tech) =>{
                                return (<span><img src={tech}/></span>)
                            })
                            
                            
                            }
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>{detail.heading}</h1>
                    </div> 
                    <p>{detail.description}
                        
                    </p>
                    <div className="Links">
                            <p class="btn-hover color-1"><img src={githubIcon}/>Github</p>
                            <p class="btn-hover color-1">
                                <img src={detail.linktype=="Web" ? WebIcon  : linkedInIcon}/>
                                {detail.linktype}
                            </p>
                    </div>
                                       
                </div>
            </motion.div>
        </div>
  )
}

export default ProjectDisplay
import React, { useState } from 'react'
import './Projects.css'
import web from '../../image/mern.png'
import react from '../../image/react.svg'
import mongo from '../../image/mongodb.svg'
import nodejs from '../../image/nodejs.svg'
import express from '../../image/express.png'
import firebase from '../../image/firebase.svg'
import html from '../../image/html.svg'
import css from '../../image/css3.svg'
import php from '../../image/php.png'
import sql from '../../image/sql.svg'
import javascript from '../../image/javascript.svg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { chatData } from './SliderData'
import { musicData } from './SliderData'
import { motion } from 'framer-motion'


function Projects() {
    const [chat,setChat] = useState(0)
    const [blog,setBlog] = useState(0)
    const [file,setFile] = useState(0)
    const [music,setMusic] = useState(0)
    const [chatphp,setChatphp] = useState(0)
    const len=3
    // console.log(chatApp)
    const chat_option=[web,react]
    const transition = {duration:2,type:"string"}
  return (
      
      <div id='Projects'>
      <div className='p-container'>
          <h1>PROJECTS</h1>
    <div className='project-wrapper'>
        
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
                            <span onClick={(e) =>setChat(chat-1==-1 ? len-1:chat-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setChat((chat+1)%2)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {chatData.map((slide,index)=>{
                                return (
                                <div className={index==chat ? 'slide active' :'slide'} key={index}>
                                    {index==chat && (
                                    <img src={slide.image} />
                                    )}
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            <span><img src={react}/></span>
                            <span><img src={mongo}/></span>
                            <span><img src={nodejs}/></span>
                            <span><img src={express}/></span>
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>Chat Application</h1>
                    </div> 
                    <p>A chat application using advance technology 
                         ReactJs, NodeJs, Mongo, ExpressJs. 
                        For Real Time Communication I had used Socket.Io,
                        And for authentication Google Authentication
                        
                    </p>
                                       
                </div>
            </motion.div>
        </div>
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
                            <span onClick={(e) =>setBlog(blog-1==-1 ? len-1:blog-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setBlog((blog+1)%2)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {chatData.map((slide,index)=>{
                                return (
                                <div className={index==blog ? 'slide active' :'slide'} key={index}>
                                    {index==blog && (
                                    <img src={slide.image} />
                                    )}
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            <span><img src={react}/></span>
                            <span><img src={mongo}/></span>
                            <span><img src={nodejs}/></span>
                            <span><img src={express}/></span>
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>BLOG WEBSITE</h1>
                    </div> 
                    <p>A Blog Website using advance technology 
                         ReactJs, NodeJs, Mongo, ExpressJs. 
                        User could post his blogs, delete and update features are also available,
                        And for authentication I had used  JWT Web Token. 
                        
                    </p>
                                       
                </div>
            </motion.div>
        </div>
        <div className="p-item">
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={transition}
                    style={{opacity:1}} className="wrap">
                <div>
                    <div className="i-carousel">
                        <div className="image">
                            <span onClick={(e) =>setFile(file-1==-1 ? len-1:file-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setFile((file+1)%2)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {chatData.map((slide,index)=>{
                                return (
                                <div className={index==file ? 'slide active' :'slide'} key={index}>
                                    {index==file && (
                                    <img src={slide.image} />
                                    )}
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            <span><img src={react}/></span>
                            <span><img src={firebase}/></span>
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>FILE STORAGE</h1>
                    </div> 
                    <p>Start to my MERN stack journey, A website capable of storing all formats of files,
                        images, videos. Also with features of delete retrive back favourites creating folder inside folder storing files inside it.
                        A website with ReactJS as frontend and 
                        backend as firebase, with Google Authentication
                        
                    </p>
                                       
                </div>
            </motion.div>
        </div>
        <div className="p-item">
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={transition}
                    style={{opacity:1}} className="wrap">
                <div>
                    <div className="i-carousel">
                        <div className="image">
                            <span onClick={(e) =>setChatphp(chatphp-1==-1 ? len-1:chatphp-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setChatphp((chatphp+1)%2)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {chatData.map((slide,index)=>{
                                return (
                                <div className={index==chatphp ? 'slide active' :'slide'} key={index}>
                                    {index==chatphp && (
                                    <img src={slide.image} />
                                    )}
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            <span><img src={html}/></span>
                            <span><img src={css}/></span>
                            <span><img src={javascript}/></span>
                            <span><img src={php}/></span>
                            <span><img src={sql}/></span>
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>Chat Application</h1>
                    </div> 
                    <p>A first complete website with Html, Css ,Javascript , Php, Sql as technologies used.
                        Main focus was not on designing 
                        (I have created complete website using mern stack as mentioned in first row with all features and perfect designs and responsive) but to implement and have a good hold on php sql and javascript.
                        It consist of all features of last seen profile and bio change , chat time, last online time etc.

                        
                    </p>
                                       
                </div>
            </motion.div>
        </div>
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
                            <span onClick={(e) =>setMusic(music-1==-1 ? len-1:music-1)}><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span onClick={(e) =>setMusic((music+1)%3)}><FontAwesomeIcon icon={faAngleRight} /></span>
                            {musicData.map((slide,index)=>{
                                return (
                                <div className={index==music ? 'slide active' :'slide'} key={index}>
                                    {index==music && (
                                    <img src={slide.image} />
                                    )}
                                </div>
                            )})}
                            
                            
                        </div>
                        <div className="i-tech">
                            <span><img src={html}/></span>
                            <span><img src={css}/></span>
                            <span><img src={javascript}/></span>
                        </div>
                        
                    </div>
                </div>
                <div className='describe'>
                    <div className="title">
                        <h1>Music Player</h1>
                    </div> 
                    <p>A simple easy to use music player, with features of repeat shuffle select music ,
                        search and little animations using particleJS.
                        A website made up of Html5 , Css3 , Javascript 
                        
                    </p>
                                       
                </div>
            </motion.div>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Projects
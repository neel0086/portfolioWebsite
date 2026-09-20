import React from 'react'
import './Scard.css'
import Tilt from "react-tilt";
function Scard({heading,details}) {
  return (
    <Tilt options={{ max: 30, scale: 1 }} className="Tilt">
    <div className='card'>
        <span style={{borderBottom:'1px solid black'}}>{heading}</span>
        <span>
          {
            details.map((tech) =>{
              return <span className='s-tech'><img src={tech.img} alt="" />{tech.detail}</span>
            })
          }
        </span>
      
    </div>
    </Tilt>
  )
}

export default Scard
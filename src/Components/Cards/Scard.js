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
            {/* {detail1 && <span className='s-tech'><img src={img1} alt="" />{detail1}</span>}
            {detail2 && <span className='s-tech'><img src={img2} alt="" />{detail2}</span>}
            {detail3 && <span className='s-tech'><img src={img3} alt="" />{detail3}</span>}
            {detail4 && <span className='s-tech'><img src={img4} alt="" />{detail4}</span>} */}
        </span>
      
    </div>
    </Tilt>
  )
}

export default Scard
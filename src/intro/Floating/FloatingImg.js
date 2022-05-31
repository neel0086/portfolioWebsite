import React from 'react'
import './FloatingImg.css'

function FloatingImg({img,text,text2}) {
  return (
    <div className='f-img'>
        <img src={img} />
        <span>
            {text}
            <br />
            {text2}
            
        </span>
    </div>
  )
}

export default FloatingImg
import React from 'react'

const Button = ({text,clicked}) => {
   
    return (
        <button className="btn" onClick={()=>clicked(text)}>{text}</button>
    )
}

export default Button

import React from 'react'
import { Link } from "react-router-dom"

const ExitBtn = () => {
  return (  
    <Link to="/">
      <button id='exit-btn'><span>&#8592;</span> HOME</button>  
    </Link>    
  )
}

export default ExitBtn
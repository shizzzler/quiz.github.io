import React from 'react';
import CreateQuiz from "./firstPage/CreateQuiz"
import Logo from "./firstPage/Logo"
import TakeQuiz from "./firstPage/TakeQuiz"


const FirstPage = () => {
  
  return (
    <div className='first-main-container'>
        <Logo/>

        <div id='main-page-text'>
          <h3>MULTIPLE CHOICE</h3>
          <h1><b>QUIZ APP</b></h1>
        </div>
        

        <div className='first-page-btn'>
          <TakeQuiz/>
          <CreateQuiz/>
        </div>
      
        
    </div>
  )
}

export default FirstPage
import React from 'react'
import RandomQuoteGen from "./results/RandomQuoteGen"
import RetakeBtn from "./results/RetakeBtn"
import Reviews from "./results/Reviews"
import Score from "./results/Score"
import ExitBtn from "./ExitBtn"

const Results = ({scores, reviews, refresh}) => {

  return (
    <div className='main-box-container'>
      <div className='box-container'>
        <div className='left-box'>
          <ExitBtn/>
          <Score score={scores}  />       
          <RandomQuoteGen />
          <RetakeBtn refresh={refresh}/>            
        </div>
        <div className='right-box'>
          <Reviews records={reviews}/>  
        </div>
      </div>
        
   </div>
  )
}

export default Results
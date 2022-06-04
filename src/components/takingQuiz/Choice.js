import React from 'react'

const Choice = ({ letter, choice, btnClick, check }) => {
  return (
    
    <button onClick={() => {btnClick(); check(letter) }} className='choice'>
      <h3>{letter}: {choice}</h3>    
    </button>   
  )
}

export default Choice
import React from 'react'

const Score = ({score}) => {
  return (
    <div className='score'>
      <h1>Score: <b>{score}</b></h1>
    </div>
  )
}

export default Score
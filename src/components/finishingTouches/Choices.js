import React from 'react'

const Choices = ({choice}) => {
  return (
    <div>
      {choice.id}: <b>{choice.ans}</b>
    </div>
  )
}

export default Choices
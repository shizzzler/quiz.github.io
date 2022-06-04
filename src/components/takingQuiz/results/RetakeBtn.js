import React from 'react'


const RetakeBtn = ({refresh}) => {
  return (
    <button onClick={refresh} className='retake-btn'><b>RETAKE</b></button>
  )
}

export default RetakeBtn
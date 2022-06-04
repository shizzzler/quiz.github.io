import React from 'react'

const PopUp = ({removeQuestion, handleClose}) => {
  return (
    <div className="popup-box">
    <div className="box">
        <b>are you sure you want to remove this? </b>
        <button onClick={handleClose}>no</button>
        <button onClick={() => {handleClose() ; removeQuestion()}}>yes</button>       
    </div>
  </div>
  )
}

export default PopUp
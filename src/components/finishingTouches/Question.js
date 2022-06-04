import React, { useState } from 'react'
import Edit from './Edit'
import Remove from './Remove'
import Choices from './Choices'
import PopUp from './PopUp'

const Question = ({data,remove, showEdit, changeValue}) => {
  //this is for the pop up
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const removeQuestion = () => {
      remove(data.id)
  }

  const handleEditClick = () => {
    showEdit(true)
    changeValue(data)
  }

  return (
    <div className='created-question'>
        <div className='btn-container'>
            <Edit handleEditClick={handleEditClick}/>
            <Remove remove={remove} id={data.id} togglePopup={togglePopup}/>
            {isPopupOpen && <PopUp handleClose={togglePopup} removeQuestion={removeQuestion}/>}
        </div>
        <h2>{data.question}</h2>
        <div>
            {data.choices.map(choice => <Choices key={choice.id} choice={choice} />)} 
        </div>
            correct answer: <b>{data.correctAns}</b>
    </div>
  )
}

export default Question
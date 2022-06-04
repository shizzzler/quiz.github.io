import React from 'react';
import Questions from './finishingTouches/Questions';
import TakeQuiz from './finishingTouches/TakeQuiz';
import ExitBtn from './takingQuiz/ExitBtn';
import EditingQuestion from './finishingTouches/EditingQuestion';
import { useState } from 'react';


const FinishingTouches = ({questions, setQuestions}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [takeQuiz, setTakeQuiz] = useState(false);


  //this is passed in for editing to edit the original question
  const [currentQuestionToEdit, setCurrentQuestionToEdit] = useState(null)

  const handleRemove = (id) => {
    //returns the ones that doesnt have the id passed in
    setQuestions(questions.filter(item => item.id !== id))
  }

  //this changes the states value to the data of the question that was clicked
  const changevalue = (data) => {

    //this removes the old question to be replaced by the new edited one
    //but the catch is the new question is added at the end fo the array
    setQuestions(questions.filter(item => item.id !== data.id))

    setCurrentQuestionToEdit(data)
  }

  const showTakeQuiz = () => {
    setShowEdit(true)
    setTakeQuiz(true)
  }



  return (
    
      /*if i click on the edit button it changes the value of showEdit to true which calls another ternary, if the value of takeQuiz is false then finally render the <EditingQuestion/> component.
      if the you click the TAKE QUIZ same thing happens except takeQuiz is true so it renders <TakeQuiz/> compoennt instead.*/
      //its a lot i know
      showEdit ? takeQuiz ? <TakeQuiz questions={questions}/>:
                            <EditingQuestion showEdit={setShowEdit} 
                                    questions={questions}/*this is passed in so the edited question can 
                                                            be added to the old array one*/
                                      setQuestions={setQuestions}
                                      data={currentQuestionToEdit}
                                    /> :
        <div className='main-box-container'>
          <div className='box-container'>
            <div className='left-box'>
              <div className='finishing-touches'>
                <ExitBtn/>
                <h1>FINISHING TOUCHES</h1>
                <button onClick={showTakeQuiz} id='take-quiz'>TAKE QUIZ</button>
              </div>          
            </div>

            <div className='right-box'>
              <Questions questions={questions} 
                          remove={handleRemove} 
                          showEdit={setShowEdit} 
                          changeValue={changevalue}
                          />
            </div>
          </div>
          
        </div>     
    
  )
}

export default FinishingTouches
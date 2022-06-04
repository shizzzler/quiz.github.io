import React, { useState } from 'react';
import ExitBtn from '../takingQuiz/ExitBtn';
import Results from '../takingQuiz/Results';
import Question from '../takingQuiz/Question';
import Choices from '../takingQuiz/Choices';
import SkipBtn from '../takingQuiz/SkipBtn';


const TakeQuiz = ({questions}) => { 
  const [ count, setCount] = useState(0);
  const [ question, setQuestion] = useState(questions[0]);//the array index is incremented on btn click
  //for results
  const [scores, setScores] = useState(0)
  const [records, setRecords] = useState([])

  //this works
  //No idea why
  const handleBtnClick = () => {
    setCount(count + 1);
    setQuestion(questions[count + 1])
  };

  const handleSkipBtnClick = () => {
    setCount(count + 1);
    setQuestion(questions[count + 1])
  };
  
  //checks if its the correct answer
  //creates a new object with the answer, correct answer, and id
  //the records are stored for the results and reviews
  const checkAns = (letter) => {
    let correct = false;
    if(letter === question.correctAns){
      correct = true;
      setScores(scores + 1)
    } 
    const rec = {
      id: question.id,
      question: question.question,
      letter: letter,
      correctAns: question.correctAns,
      correct
    }
    setRecords([...records, rec])     
  };


  const refreshPage = () => {
    window.location.reload()
  }
  return (
    <div className='main-box-container'>
      {count === questions.length ? <div><Results scores={scores} 
                                                  reviews={records} 
                                                  refresh={refreshPage} 
                                                  />
                                    </div>:
                                          <div className='box-container'>
                                            <div className='left-box'>
                                              <ExitBtn/>
                                              <Question question={question.question}/>
                                            </div>
                                            <div className='right-box'>
                                               <Choices choice={question.choices} 
                                                          btnClick={handleBtnClick}
                                                          check={checkAns}
                                                          />
                                               <SkipBtn btnClick={handleSkipBtnClick}/>
                                            </div>        
                                            </div>}
    </div>
  )
}

export default TakeQuiz
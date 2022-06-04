import React from 'react'
import { useEffect, useState } from 'react'
import Choices from './takingQuiz/Choices'
import ExitBtn from './takingQuiz/ExitBtn'
import Question from './takingQuiz/Question'
import SkipBtn from "./takingQuiz/SkipBtn"
import Loading from './Loading'

import Results from './takingQuiz/Results'



const Quiz = () => {
  const [ question, setQuestion] = useState(null);
  const [ count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [throwError, setThrowError] = useState(null)
  /*you increment the count by 1 every time you click one of the choices, by doing so you increment
   the index of the item you want to take from the json array aswell... */
 
  //for results
  const [scores, setScores] = useState(0)
  const [records, setRecords] = useState([])


  useEffect(() => {
      fetch("https://shizzzler.github.io/quiz-app-MockDatabase/database.json")
        .then(res => {
          if(!res.ok) {
            throw Error("failed to fetch data")
          }
          return res.json()
        })
        .then(data => {
          setQuestion(data.originalQuestions[count])
          setLoading(false)
        })
        .catch(err => {
          setThrowError(err.message)
        })
    }, [count]);

  const handleBtnClick = () => {
    setCount(count + 1);
    setLoading(true);
  };

  //checks if its the correct answer
  //creates a new object with the question, answer, correct answer, and id
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
      {/*if all the questions are passed then go to seeresults button */}
      {/*15 becuz the index starts at 0. im gonna tell u dis cuz i got stuck here */}
      {count === 15 ? <Results scores={scores} reviews={records} refresh={refreshPage} />:
        <div className='box-container'>
          <div className='left-box'>
            <ExitBtn />
            {throwError ? <h3>{throwError}</h3> :
                                  <Question question={isLoading ? <Loading /> : question.question} />}
          </div>
          
        <div className='right-box'>
          {throwError ? <div>{throwError}</div> :
                        isLoading ? <Loading /> : <Choices choice={question.choices} 
                                                            btnClick={handleBtnClick}
                                                            check={checkAns}
                                                            />}
          <SkipBtn btnClick={handleBtnClick}/>                                                   
        </div>                                                       
    </div>}

       
      
      
    </div>
  )
}

export default Quiz
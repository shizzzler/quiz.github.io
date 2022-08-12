import React from 'react'
import ExitBtn from "./takingQuiz/ExitBtn"
import Finish from './CreateQuiz/Finish'
import FinishingTouches from './FinishingTouches'
import { useState } from "react"


const Create = () => {
  const [createNewQ, setCreateNewQ] = useState([])
  const [show, setShow] = useState(false)

    const [id, setId] = useState(1)
    const [question, setQuestion] = useState("");
    const [A, setA] = useState("");
    const [B, setB] = useState("");
    const [C, setC] = useState("");
    const [D, setD] = useState("");
    const [correctAns, setCorrectAns] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        //this mimics the structuce of question in the json objects
        let choices = [
            {
                id: "A",
                ans: A
            },
            {
                id: "B",
                ans: B
            },
            {
                id: "C",
                ans: C
            },
            {
                id: "D",
                ans: D
            }
        ];

        let data = {id, question, choices, correctAns};

        setCreateNewQ([...createNewQ, data]);

        //sets the data back to empty string
        setQuestion("");
        setA("");
        setB("");
        setC("");
        setD("");
        setCorrectAns("");

        //increments the id for the next question submitted
        setId(id + 1);
        
    }


  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className='main-box-container'>
      {show ? <FinishingTouches questions={createNewQ} setQuestions={setCreateNewQ} />:         
          <form onSubmit={handleSubmit} className='box-container'>
            <div className='left-box'>
              <ExitBtn />
                <div className='textarea'>
                    <label>
                        <h2>write question here:</h2>
                    </label>
                    <textarea
                            required
                            placeholder='write a short question'
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                    />
                </div>    
                <div className='correct-answer'>
                    <h2>Pick the letter of the correct answer: </h2>
                    <div className='input-container'>
                        <label>A</label>
                        <input 
                            type="radio"
                            /*this is so that the required applies to the whole radio group*/
                            /*but you cant still choose only one */
                            name="choice"
                            required
                            label="A"
                            value={correctAns === "A"}
                            checked={correctAns === "A"}
                            onChange={() => setCorrectAns("A")}
                        />
                        <label>B</label>
                        <input 
                            type="radio"
                            name="choice"
                            label="B"
                            value={correctAns === "B"}
                            checked={correctAns === "B"}
                            onChange={() => setCorrectAns("B")}
                        />
                        <label>C</label>
                        <input 
                            type="radio"
                            name="choice"
                            label="C"
                            value={correctAns === "C"}
                            checked={correctAns === "C"}
                            onChange={() => setCorrectAns("C")}
                        />
                        <label>D</label>
                        <input 
                            type="radio"
                            name="choice"
                            label="D"
                            value={correctAns === "D"}
                            checked={correctAns === "D"}
                            onChange={() => setCorrectAns("D")}
                        />
                    </div>
                    
                </div>      
            </div>

            <div className='right-box'>
                <div className='creating-choices-container'>
                    <div className='creating-choice'>
                        <label>A:</label>
                            <input type="text"
                                required
                                placeholder='write a short answer'
                                value={A}
                                onChange={e => setA(e.target.value)}
                        />
                    </div> 
                    <div className='creating-choice'>
                        <label>B: </label>
                            <input type="text"
                                required
                                placeholder='write a short answer'
                                value={B}
                                onChange={e => setB(e.target.value)}
                        />
                    </div> 
                    <div className='creating-choice'>
                        <label> C: </label>
                            <input type="text"
                                required
                                placeholder='write a short answer'
                                value={C}
                                onChange={e => setC(e.target.value)}
                        />
                    </div> 
                    <div className='creating-choice'>
                        <label> D: </label>
                            <input type="text"
                                required
                                placeholder='write a short answer'
                                value={D}
                                onChange={e => setD(e.target.value)}
                        />
                    </div>
                </div>               
                <div className='choices-btn'>
                    <Finish show={handleClick} />
                    <input type="submit" value="SUBMIT FORM" />
                    
                </div> 
            </div>               
          </form>
         
      }
    </div>
  )
}

export default Create
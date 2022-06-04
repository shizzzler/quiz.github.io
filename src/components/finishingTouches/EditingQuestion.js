import React from 'react';
import ExitBtn from '../takingQuiz/ExitBtn';
import { useState } from 'react'

const Form = ({showEdit, data, questions, setQuestions}) => {
    const [question, setQuestion] = useState(data.question);
    const [A, setA] = useState(data.choices[0].ans);
    const [B, setB] = useState(data.choices[1].ans);
    const [C, setC] = useState(data.choices[2].ans);
    const [D, setD] = useState(data.choices[3].ans);
    const [correctAns, setCorrectAns] = useState(data.correctAns)

    const handleSubmit = (e) => {
        e.preventDefault()

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
            },
        ];

        let newData = {id: data.id, question, choices, correctAns};

        setQuestions([...questions, newData]);

        showEdit(false)
    }

  return (
    <div className='main-box-container'>
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
                    <input type="submit" value='submit'/>
                </div> 
            </div>               
          </form>        
    </div>
  )
}

export default Form
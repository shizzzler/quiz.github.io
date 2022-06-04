import React from 'react';
import { useState } from "react"

const Records = ({ question,letter, correctAns, correct}) => {

    const [redOrGreen] = useState(correct)

  return (
    <div className={`review ${redOrGreen ? "green" : "red"}`}>
        <h2>{question} </h2>
        <h4>correct answer: {correctAns} your answer: {letter} </h4>
    </div>
  )
}

export default Records
import React from 'react'
import { useState, useEffect } from "react"
import Loading from '../../Loading';

const RandomQuoteGen = () => {
  const [randomNum] = useState(Math.floor((Math.random() * 4.9999) ));
  const [ quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [throwError, setThrowError] = useState(null)

  useEffect(() => {
    fetch("https://shizzzler.github.io/quiz-app-MockDatabase/database.json")
      .then(res => {
        if(!res.ok){
          throw Error("failed to fetch quote")
        }
        return res.json()})
      .then(data => {
        setQuote(data.quotes[randomNum])
        setIsLoading(false)
      })
      .catch(err => {setThrowError(err.message)})

  }, [randomNum])
  
  return (
        throwError ? <div>{throwError}</div>: isLoading ? <Loading/>:<div className='quote'>
                                                                      <h2>"{quote.quote}"</h2>
                                                                      <h3>-{quote.by}</h3>
                                                                    </div>   
  )
}

export default RandomQuoteGen
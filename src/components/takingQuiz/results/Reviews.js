import React from 'react';
import Review from './Review';

const Reviews = ({records}) => {
  return (
    <div className='reviews'>
      {records.map(item => <Review key={item.id} 
                                    question={item.question}
                                    letter={item.letter} 
                                    correctAns={item.correctAns} 
                                    correct={item.correct}  
                                    />) }
    </div>
  )
}

export default Reviews
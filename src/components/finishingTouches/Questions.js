import React from 'react';
import Question from './Question';

const Questions = ({questions, remove, showEdit, changeValue}) => {
  return (
    <div className='created-questions-container'>
      {questions.map((item) => <Question key={item.id} 
                                          data={item} 
                                          remove={remove} 
                                          showEdit={showEdit}
                                          changeValue={changeValue}
                                          />)}
    </div>
  )
}

export default Questions
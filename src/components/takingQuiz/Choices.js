import React from 'react';
import Choice from './Choice';


const Choices = ({ choice, btnClick, check }) => {
  return (
    <div className='choices'>
      {choice.map((item) => <Choice key={item.id} 
                                    letter={item.id} 
                                    choice={item.ans} 
                                    btnClick={btnClick}
                                    check={check}
                                    />)}
    </div>
  )
}

export default Choices
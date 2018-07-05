import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
  return (
    <div key={index} className='inputs'>
      <label className={`inputs__number ${state == '' ? 'gray' : 'green'}`}>{index + 1}</label>
      <input value={state} onChange={onChange} name={name} placeholder={title}/>
      <label className='inputs__title'>{title}</label>
    </div>
  );
}

export default Input;

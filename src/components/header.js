import React from 'react';

const Header = (title) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <p>Fill out the fields below to generate a Mad Lib story.</p>
    </div>
  );
}

export default Header;

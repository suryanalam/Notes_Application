import React from 'react';
import './Header.css';

function Header({handleToggleDarkMode}) {  
  return (
    <header className='header'>
      <section className='nav'>
        <h1 className='title'>Notes</h1>
        <button className='toggle-btn' 
        onClick = {()=>handleToggleDarkMode((previousDarkMode)=>!previousDarkMode)}>Switch theme</button>
      </section> 
    </header>
  )
}

export default Header

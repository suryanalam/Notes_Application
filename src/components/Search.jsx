import React from 'react'
import './Search.css';
function Search({handleSearchNote}) {
  return (
    <section className='search-section'>
        <input className="search-bar" type = "search" placeholder='search notes:' 
        onChange ={(event)=>handleSearchNote(event.target.value)} />
  </section>
  )
}

export default Search

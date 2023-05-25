import React from 'react';
import {MdDelete} from 'react-icons/md';
import './Card.css';

function Card({id,txt,time,handleDeleteNote}) {
  return (
    <section className='card'>

        <section className="header-section">
            <h3 className='title'>Note: {id}</h3>
        </section>

        <section className="content-section">
            <p className='content'>{txt}</p>
        </section>

        <section className="footer-section">
            <p className='date'>created:{time}</p>
            <MdDelete className='delete-icon' 
            onClick={()=>handleDeleteNote(id)}/>
        </section>

    </section>
  )
}

export default Card

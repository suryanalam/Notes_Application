import React from 'react'
import Card from './Card';
import AddNote from './AddNote';
import './Cardslist.css';
function Cardslist({data, handleAddNote, handleDeleteNote}) {
  return (   
    <section className='cards-list'>
    {
        data.map((data)=><Card 
                id = {data.id} 
                txt={data.text} 
                time = {data.date}
                handleDeleteNote = {handleDeleteNote}
         />)
    }
    <AddNote handleAddNote = {handleAddNote} />
    </section>
  )
}

export default Cardslist;

import React from 'react';
import { useState } from 'react';
import './AddNote.css';

function AddNote({handleAddNote}) {
  const  [newText, setNewText] = useState("");
  const maxLength = 200;

  function handleNewText(event){
    if(maxLength-event.target.value.length >= 0){
      setNewText(event.target.value);
    } 
  }

  function handleSaveNote(event){
    if(newText.trim().length > 0){
      handleAddNote(newText);
      setNewText("");
    }
  }

  return (
    <section className="card">

        <section className='header-section'>
            <h3 className="new-card-title">Add a note:</h3>
        </section>

        <section className='content-section'>
            <textarea 
            className="new-card-textarea" 
            rows="8" 
            cols="10" 
            placeholder='Note it here:' 
            value={newText} 
            onChange ={handleNewText}></textarea>
        </section>

        <section className='footer-section'>
            <p className='character-remain'>{maxLength-newText.length} character(s) remaining</p>
            <button className='save-btn' onClick={handleSaveNote} disabled={!newText}>save</button>
        </section>

    </section>
  )
}

export default AddNote

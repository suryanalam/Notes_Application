import { useState, useEffect } from 'react';
import React from 'react';
import Header from './Header';
import Search from './Search';
import './Main.css';
import Cardslist from './Cardslist';


function Main() {

  const [data, setData] = useState(
    [
      {id:1,text:"this is note: 1",date:"12/02/2023"},
      {id:2,text:"this is note: 2",date:"14/02/2023"},
      {id:3,text:"this is note: 3",date:"16/02/2023"},
      {id:4,text:"this is note: 4",date:"18/02/2023"},
      {id:5,text:"this is note: 5",date:"20/02/2023"}
    ]
  )

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
      console.log(savedNotes);
      if(savedNotes){
        // console.log(savedNotes);
        setData(savedNotes);
      }
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(data))
  },[data]);

  function addNote(text){
    const date = new Date();
    const newData = {
      id:data[data.length-1].id + 1,
      text:text,
      date: date.toLocaleDateString()
    }
    const addNewData = [...data,newData];
    setData(addNewData);
  }

  function deleteNote(id){
    const updatedData = data.filter((data)=> data.id !== id );
    setData(updatedData);
  }

  return (

   <section className={`${darkMode && 'dark-mode'}`}>
        <section className='main-container'>
                
            <Header handleToggleDarkMode = {setDarkMode}/>

            <Search handleSearchNote={setSearchText}/>

            <Cardslist 
                data = {data.filter((data)=>data.text.toLowerCase().includes(searchText))} 
                handleAddNote={addNote} 
                handleDeleteNote = {deleteNote}
            />
            
        </section>
   </section>

  )
}

export default Main;

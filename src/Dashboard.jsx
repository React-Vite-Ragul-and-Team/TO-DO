import React, { useState, useEffect } from 'react';
import './DashboardStyle.css'

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const containerElement = document.getElementById('container');

  useEffect(() => {
    const storedNotes = getAppStorage();
    setNotes(storedNotes);
  }, []);

  const getAppStorage = () => {
    return JSON.parse(localStorage.getItem('abdur_app') || '[]');
  };

  const createTextElement = (id, content) => {
    const updatesticky = (id, name) => {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, name } : note
      );
      setNotes(updatedNotes);
      saveNote(updatedNotes);
    };
    const roseColorStyle = {
      backgroundColor: 'rose', // You can use the color name 'rose'
    };

    const deleteNotes = (id) => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      saveNote(updatedNotes);
    };

    return (
      <textarea
        className="sticky"
        style={roseColorStyle}
        value={content}
        placeholder="Enter Your Notes"
        onChange={(e) => updatesticky(id, e.target.value)}
        onDoubleClick={() => {
          const check = window.confirm('Are You Sure to Delete ?');
          if (check) {
            deleteNotes(id);
          }
        }}
      />
    );
  };

  const saveNote = (updatedNotes) => {
    localStorage.setItem('abdur_app', JSON.stringify(updatedNotes));
  };

  const addsticky = () => {
    const newNote = {
      id: Math.floor(Math.random() * 1000000),
      name: '',
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNote(updatedNotes);
  };

  return (
    <div>
      {notes.map((note) => (
        <React.Fragment key={note.id}>
          {createTextElement(note.id, note.name)}
        </React.Fragment>
      ))}
      <button className="btn-add" onClick={addsticky}>
        Add Sticky
      </button>
    </div>
  );
}

export default Dashboard;

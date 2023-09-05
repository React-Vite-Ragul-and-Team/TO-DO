import React, { useState, useEffect } from 'react';
import './StickyNotes.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function StickyNotes() {
  const [notes, setNotes] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['#FF5733', '#333399', '#006600', '#800080', '#FFA500']; // Red, Dark Blue, Dark Green, Purple, Orange

  useEffect(() => {
    const storedNotes = getAppStorage();
    setNotes(storedNotes);
  }, []);

  const getAppStorage = () => {
    return JSON.parse(localStorage.getItem('abdur_app') || '[]');
  };

  const updateNote = (id, name) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, name } : note
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  const saveNotes = (updatedNotes) => {
    localStorage.setItem('abdur_app', JSON.stringify(updatedNotes));
  };

  const addNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 1000000),
      name: '',
      color: colors[colorIndex % colors.length], // Cycle through the specified colors in order
    };
    setColorIndex((prevColorIndex) => prevColorIndex + 1);
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  return (
    <div>
      <header >
        <h2 id="color-cycling-text">WHERE IDEAS FIND THEIR COLORFUL HOME</h2>
      </header>
      {notes.map((note) => (
        <React.Fragment key={note.id}>
          <textarea
            className="sticky"
            style={{ backgroundColor: note.color }}
            value={note.name}
            placeholder="Enter Your Notes"
            onChange={(e) => updateNote(note.id, e.target.value)}
            onDoubleClick={() => {
              const check = window.confirm('Are You Sure to Delete?');
              if (check) {
                deleteNote(note.id);
              }
            }}
          />
        </React.Fragment>
      ))}
      <br />
      <button className="btn-add" onClick={addNote}>
        <i className="bi bi-file-earmark-plus" style={{ fontSize: 30 }}></i>
      </button>
      <footer>
          <pre id="footer-text" className="blink">
            Single click to EDIT                                                                  Double click to DELETE
          </pre>
      </footer>
    </div>
  );
}

export default StickyNotes;
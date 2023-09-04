import React, { useState } from 'react';

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);

  const addTodo = () => {
    if (input.trim() !== '') {
      if (editingIndex === -1) {
        setTodos([...todos, { text: input, completed: false }]);
      } else {
        const updatedTodos = [...todos];
        updatedTodos[editingIndex] = { text: input, completed: false };
        setTodos(updatedTodos);
        setEditingIndex(-1);
      }
      setInput('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setInput(todoToEdit.text);
    setEditingIndex(index);
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>
        {editingIndex === -1 ? 'Add' : 'Update'}
      </button>
      <div className="navbar">
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => toggleCompletion(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

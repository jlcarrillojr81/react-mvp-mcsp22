import React, { useState } from 'react';

function TodoForm({ handleRefresh }) {
  const [todoInput, setTodoInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the Express API
    const res = await fetch('https://react-mvp-api.onrender.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        todo: todoInput,
        location: locationInput,
      }),
    });

    if (res.ok) {
      // Clear the form inputs
      setTodoInput('');
      setLocationInput('');

      // Refresh the todos after successful submission
      handleRefresh();
    } else {
      console.error('Error saving todo to the database');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter a New Todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add Location"
        value={locationInput}
        onChange={(e) => setLocationInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;

import React from 'react';
import TodoForm from './TodoForm';
import '../App.css'; // Import the CSS file

function MenuBar({ handleRefresh }) {
  return (
    <div className="menu-bar"> 
      <TodoForm handleRefresh={handleRefresh} />
    </div>
  );
}

export default MenuBar;

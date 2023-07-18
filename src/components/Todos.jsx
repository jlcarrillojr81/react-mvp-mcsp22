import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, handleRefresh }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRefresh={handleRefresh}
        />
      ))}
    </div>
  );
};

export default Todos;

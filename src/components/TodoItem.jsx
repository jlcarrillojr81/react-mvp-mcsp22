import { useState } from 'react';

const TodoItem = ({ todo, handleRefresh }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    todo: todo.todo,
    location: todo.location,
  });

  const handleCardClick = () => {
    setIsEditMode(true);
  };

  const handleEditChange = (e) => {
    setEditedTodo({
      ...editedTodo,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://react-mvp-api.onrender.com/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTodo),
      });

      if (!res.ok) {
        throw new Error('Failed to update todo.');
      }

      setIsEditMode(false);
      handleRefresh(); // Refresh todos after successful update
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        const res = await fetch(`https://react-mvp-api.onrender.com/todos/${todo.id}`, {
          method: 'DELETE',
        });

        if (!res.ok) {
          throw new Error('Failed to delete todo.');
        }

        setIsEditMode(false);
        handleRefresh(); // Refresh todos after successful delete
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="card" onClick={handleCardClick} id={todo.id}>
      {isEditMode ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedTodo.todo}
            name="todo"
            onChange={handleEditChange}
          />
          <input
            type="text"
            value={editedTodo.location}
            name="location"
            onChange={handleEditChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h1>"{todo.todo}"</h1>
          <h1>({todo.location})</h1>
        </>
      )}
      {isEditMode && (
        <>
          <button onClick={handleDeleteClick}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;



// const TodoItem = ({todo}) => {

//     const handleClick = (e) => {
//         console.log(e.currentTarget.id)
//     }

//     return (
//         <div className="card" onClick={handleClick} id={todo.id}>
//             <h1>"{todo.todo}"</h1>
//             <h1>({todo.location})</h1>
//         </div>
//     )
// }

// export default TodoItem
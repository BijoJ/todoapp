import React from "react";

const TodoItem = ({ todo, handleEditClick, handleDeleteClick, handleStatusClick }) => {
  return (
    <li key={todo.id}>
      <input 
        type='checkbox'
        value={todo.text}
        onChange={handleStatusClick(todo)}
      />
      <span className={todo.status ? "task-done" : "" }>{todo.text}</span>
      <button onClick={() => handleEditClick(todo)}>Edit</button>
      <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;

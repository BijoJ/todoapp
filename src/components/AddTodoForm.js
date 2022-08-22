import React from "react";

const AddTodoForm = ({ todo, handleFormSubmit, handleInputChange }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Add Todo</h2>
      <input
        name="todo"
        type="text"
        placeholder="Create a new todo"
        value={todo}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

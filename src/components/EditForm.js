import React from "react";

const EditForm = ({
  currentTodo,
  setIsEditing,
  handleEditInputChange,
  handleEditFormSubmit,
}) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <h2>Edit Todo</h2>

      <label htmlFor="editTodo">Edit todo: </label>

      <input
        name="editTodo"
        type="text"
        value={currentTodo.text}
        onChange={handleEditInputChange}
      />

      <button type="submit">Update</button>

      <button onClick={() => setIsEditing}>Cancel</button>
    </form>
  );
};

export default EditForm;

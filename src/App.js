import React, { useEffect, useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import EditForm from "./components/EditForm";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [currentTodo, setCurrentTodo] = useState({});
  //local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };
  //Add todos
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Date.now(), text: todo, status: false },
      ]);
    }
    setTodo("");
  };
  //delete todos
  const handleDeleteClick = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //completed todos
  const handleStatusClick = (todo) => {
    console.log(todo);
    return (e) => setTodos(todos.map((task) => {
      if (task.status === todo.status) {
        todo.status = e.target.checked;
      }
      return todo;
    }))
  }

  //edit todos
  const handleEditInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
    setIsEditing(false);
  };
  const handleEditClick = (todo) => {
    setIsEditing(true);

    setCurrentTodo({ ...todo });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {isEditing ? (
        <EditForm
          currentTodo={currentTodo}
          setIsEditing={setIsEditing}
          handleEditInputChange={handleEditInputChange}
          handleEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <AddTodoForm
          todo={todo}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            handleStatusClick={handleStatusClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;

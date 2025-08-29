import React, { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditID] = useState(null);

  // Fetch all todos on mount
  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/todo/alltodos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add or update todo
  const handleEditUpdate = async () => {
    if (!input.trim()) return;

    if (editId) {
      // Update existing todo
      await fetch(`http://localhost:5000/api/todo/update/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      await fetchTodos(); // refresh todos after update
      setInput("");
      setEditID(null);
    } else {
      // Add new todo
      await fetch("http://localhost:5000/api/todo/add-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      await fetchTodos(); // refresh todos after add
      setInput("");
      setEditID(null);
    }
  };

  // Delete todo
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/todo/delete/${id}`, {
      method: "DELETE",
    });

    await fetchTodos(); // refresh todos after delete
  };

  // Set todo for editing
  const handleEdit = (id, text) => {
    setInput(text);
    setEditID(id);
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>

      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo..."
        />
        <button onClick={handleEditUpdate}>
          {editId !== null ? "Update Todo" : "Add Todo"}
        </button>
      </div>

      {todos.length === 0 ? (
        <p className="empty-message">No todos: Add a todo</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <span>{todo.text}</span>
              <button onClick={() => handleEdit(todo._id, todo.text)}>
                Edit
              </button>
              <button onClick={() => handleDelete(todo._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;

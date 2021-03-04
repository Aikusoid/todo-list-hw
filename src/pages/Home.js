import React, { useState } from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";
import Context from "../context/context";

export default function Home() {
  const [todos, setTodos] = useState(
    new Array(3)
      .fill("")
      .map((_, i) => ({ id: i, title: `Note ${i + 1}`, completed: false }))
  );

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title, i) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <AddTodo onCreate={addTodo} />
      {todos.length ? (
        <Todos todos={todos} onToggle={toggleTodo} />
      ) : (
        <h3>Úkoly jsou splněné! 😊</h3>
      )}
    </Context.Provider>
  );
}

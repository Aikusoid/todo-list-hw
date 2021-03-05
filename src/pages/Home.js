import React from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";

export default function Home({ todos, setTodos, toggleTodo }) {
  function addTodo(title) {
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

  return (
    <React.Fragment>
      <AddTodo onCreate={addTodo} />
      {todos.length ? (
        <Todos todos={todos} onToggle={toggleTodo} />
      ) : (
        <h3>Úkoly jsou splněné! 😊</h3>
      )}
    </React.Fragment>
  );
}

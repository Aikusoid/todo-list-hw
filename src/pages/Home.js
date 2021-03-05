import React from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";

export default function Home({ todos, setTodos, toggleTodo }) {
  function addTodo(title, deadline) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          deadline: deadline,
        },
      ])
    );
  }

  return (
    <React.Fragment>
      <AddTodo onCreate={addTodo} />
      <Todos todos={todos} onChange={toggleTodo} />
    </React.Fragment>
  );
}

import React from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";

export default function Home() {
  const todos = new Array(3)
    .fill("")
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));

  return (
    <React.Fragment>
      <AddTodo />

      <Todos todos={todos} />
    </React.Fragment>
  );
}

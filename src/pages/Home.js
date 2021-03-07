import React from "react";
import { AddTodo } from "../components/AddTodo";
import { Todos } from "../components/Todos";

export default function Home({ todos }) {
  return (
    <React.Fragment>
      <AddTodo />
      <ul className="list-group">
        {todos
          ? todos.map((todo) => <Todos todo={todo} key={todo.id} />)
          : null}
      </ul>
    </React.Fragment>
  );
}

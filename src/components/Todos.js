import React from "react";
import TodoItem from "./TodoItem";

export const Todos = ({ todos, onToggle }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem todo={todo} onChange={onToggle} key={todo.id} />
      ))}
    </ul>
  );
};

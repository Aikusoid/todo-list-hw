import React, { useContext } from "react";
import Context from "../context/context";

export const Todos = ({ todo }) => {
  const { removeTodo, toggleTodo } = useContext(Context);
  if (!todo.completed) {
    return (
      <li className="list-group-item">
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          onChange={() => toggleTodo(todo.id)}
        />
        <strong className="todo-title">{todo.title}</strong>
        <small>
          {new Date(todo.deadline).toLocaleDateString()} /{" "}
          {new Date(todo.deadline).toLocaleTimeString()}
        </small>
        <button className="remover" onClick={() => removeTodo(todo.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
  return null;
};

import React, { useContext } from "react";
// import TodoItem from "./TodoItem";
import Context from "../context/context";

export const Todos = ({ todos, onChange }) => {
  const { removeTodo } = useContext(Context);
  return (
    <ul className="list-group">
      {todos.map((todo) => {
        if (!todo.completed) {
          return (
            <li className="list-group-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                onChange={() => onChange(todo.id)}
              />
              <strong className="todo-title">{todo.title}</strong>
              <small>{new Date().toLocaleDateString()}</small>
              <button className="remover" onClick={() => removeTodo(todo.id)}>
                <i className="fas fa-trash-alt"></i>
              </button>
            </li>
          );
        }
      })}
    </ul>
  );
};

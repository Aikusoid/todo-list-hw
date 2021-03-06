import React, { useContext } from "react";
// import TodoItem from "./TodoItem";
import Context from "../context/context";

export const Todos = ({ todos }) => {
  const { removeTodo, toggleTodo } = useContext(Context);

  return (
    <ul className="list-group">
      {todos.map((todo) => {
        if (!todo.completed) {
          return (
            <li className="list-group-item" key={todo.id}>
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
      })}
    </ul>
  );
};

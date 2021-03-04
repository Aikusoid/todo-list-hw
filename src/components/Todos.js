import React from "react";

export const Todos = ({ todos }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          <input className="form-check-input me-1" type="checkbox" value="" />
          <div>
            <strong className="todo-title">{todo.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>
          <button className="remover">
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      ))}
    </ul>
  );
};

import React, { useContext } from "react";
import Context from "../context/context";

export default function TodoItem({ todo, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("todo-done");
  }

  console.log(todo);
  return (
    <li className="list-group-item">
      <span className={classes.join("")}>
        <input
          className="form-check-input me-1"
          type="checkbox"
          value=""
          onChange={() => onChange(todo.id)}
        />
        <strong className="todo-title">{todo.title}</strong>
        <small>{new Date().toLocaleDateString()}</small>
      </span>
      <button className="remover" onClick={() => removeTodo(todo.id)}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </li>
  );
}

import React, { useContext } from "react";
import Context from "../context/context";

export default function Done({ todos }) {
  const { removeTodo } = useContext(Context);

  return (
    <React.Fragment>
      <h3>Seznam splněných úkolů</h3>
      <ul className="list-group">
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <li className="list-group-item">
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
    </React.Fragment>
  );
}

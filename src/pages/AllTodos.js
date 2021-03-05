import React, { useContext } from "react";
import Context from "../context/context";

export default function AllTodos({ todos }) {
  const { removeTodo } = useContext(Context);

  return (
    <React.Fragment>
      <h4>Seznam všech úkolů</h4>
      <ul className="list-group">
        {todos.map((todo) => {
          if (todo.completed) {
            return (
              <li className="list-group-item" key={todo.id}>
                <span className="done-todo">
                  <strong className="todo-title">{todo.title}</strong>
                  <small>{new Date(todo.deadline).toLocaleDateString()}</small>
                </span>
                <button className="remover" onClick={() => removeTodo(todo.id)}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </li>
            );
          } else {
            return (
              <li className="list-group-item" key={todo.id}>
                <span>
                  <strong className="todo-title">{todo.title}</strong>
                  <small>{new Date(todo.deadline).toLocaleDateString()}</small>
                </span>
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

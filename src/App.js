import React, { useState, useContext, useReducer, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Done from "./pages/Done";
import Home from "./pages/Home";
import Context from "./context/context";
import AllTodos from "./pages/AllTodos";
import axios from "axios";

const dbUrl = `https://react-todos-hw-default-rtdb.firebaseio.com`;

export default function App() {
  const [todos, setTodos] = useState(
    new Array().fill("").map((_, i) => ({
      id: i,
      title: null,
      completed: false,
      deadline: Date.now(),
    }))
  );

  const [value, setValue] = useState("");
  const [deadline, setDeadline] = useState(Date.now() + 86400000);

  function handleSubmit(event) {
    event.preventDefault();
    if (value.trim()) {
      addTodo(value, deadline);
      setValue("");
      setDeadline(Date.now() + 86400000);
    }
  }

  const addTodo = (title, deadline) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          deadline: deadline,
        },
      ])
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function reminder(todo) {
    alert(`${todo} - comming soon`);
  }

  todos.map((todo) => {
    if (todo.deadline - Date.now() < 21400000) {
      reminder(todo.title);
    }
  });

  return (
    <Context.Provider
      value={{
        addTodo,
        removeTodo,
        toggleTodo,
        handleSubmit,
        setValue,
        setDeadline,
        value,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path={"/"} exact render={() => <Home todos={todos} />} />
            <Route path={"/done"} render={() => <Done todos={todos} />} />
            <Route
              path={"/alltodos"}
              render={() => <AllTodos todos={todos} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

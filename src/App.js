import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Done from "./pages/Done";
import Home from "./pages/Home";
import Context from "./context/context";
import AllTodos from "./pages/AllTodos";

export default function App() {
  // const [termin, setTermin] = useState(Date.now());
  const [todos, setTodos] = useState(
    new Array().fill("").map((_, i) => ({
      id: i,
      title: null,
      completed: false,
      deadline: Date.now(),
    }))
  );

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

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

  return (
    <Context.Provider value={{ removeTodo }}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              path={"/"}
              exact
              render={() => (
                <Home
                  todos={todos}
                  setTodos={setTodos}
                  toggleTodo={toggleTodo}
                />
              )}
            />
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

// Importovala jsem komponenty BrouserRouter, Switch a Route y knihovny react-route-dom,
// abych mohla vztrořit dvě stránky. Na zobrazení pouze jednoho routu jsem použila Switch component.
// Parametr exact nastavuje Home page jako primární

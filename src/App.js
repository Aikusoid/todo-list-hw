import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Done from "./pages/Done";
import Home from "./pages/Home";
import Context from "./context/context";

export default function App() {
  const [todos, setTodos] = useState(
    new Array(3).fill("").map((_, i) => ({
      id: i,
      title: `Note ${i + 1}`,
      completed: false,
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
          </Switch>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

// Importovala jsem komponenty BrouserRouter, Switch a Route y knihovny react-route-dom,
// abych mohla vztrořit dvě stránky. Na zobrazení pouze jednoho routu jsem použila Switch component.
// Parametr exact nastavuje Home page jako primární

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Done from "./pages/Done";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/done"} component={Done} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

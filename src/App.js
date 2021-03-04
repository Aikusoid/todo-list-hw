import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Done from "./pages/Done";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/done"} component={Done} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// Importovala jsem komponenty BrouserRouter, Switch a Route y knihovny react-route-dom,
// abych mohla vztrořit dvě stránky. Na zobrazení pouze jednoho routu jsem použila Switch component.
// Parametr exact nastavuje Home page jako primární

export default App;

import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light "
    style={{ backgroundColor: "#e3f2fd", marginBottom: "1.5rem" }}
  >
    <a className="navbar-brand" href="/">
      Note App
    </a>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" exact>
          Nesplněné úkoly
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/done">
          Hotové úkoly
        </NavLink>
      </li>
    </ul>
  </nav>
);

//Zde jsem použila classes Bootstrap. Odkazy na stránky:  <a> jsem nahradila komponentem NavLink.

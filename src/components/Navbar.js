import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav
    className="navbar navbar-expand-lg navbar-light "
    style={{ backgroundColor: "#e3f2fd", marginBottom: "1.5rem" }}
  >
    <div class="container-fluid">
      <a className="navbar-brand" href="/">
        Note App
      </a>

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
        <li className="nav-item">
          <NavLink className="nav-link" to="/alltodos">
            Všechny úkoly
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

//Zde jsem použila classes Bootstrap. Odkazy na stránky:  <a> jsem nahradila komponentem NavLink.

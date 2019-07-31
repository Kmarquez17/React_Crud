import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  /*Espera como argumentos la url y el nombre*/

  state = {
    navbar: [
      {
        id: "1",
        url: "/inicio",
        nombre: "Inicio"
      },
      {
        id: "2",
        url: "/categoria",
        nombre: "Categoria"
      },
      {
        id: "3",
        url: "/articulo",
        nombre: "Articulos"
      }
    ]
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            Logo
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {this.state.navbar.map(nav => (
                <li className="nav-item" key={nav.id}>
                  <NavLink className="nav-link" to={nav.url}>
                    {nav.nombre}
                  </NavLink>
                </li>
              ))}
              <li>
                <a className="nav-link" onClick = {() => {
                  console.log(this.props.history)
                  console.log(this.props.path)
                }}>
                  Atras
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

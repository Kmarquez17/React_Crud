import React, { Component } from "react";
// import "./Login.css";
import { withRouter } from "react-router-dom";

import authService from "../services/AuthService";

const FormularioLogin = props => {
  return (
    <div className=" container">
      <div className="row">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label> Email: </label>
            <input
              onChange={props.handleChange}
              className="form-control"
              type="text"
              name="email"
              value={props.data.email}
            />
          </div>
          <div className="form-group">
            <label> Contraseña: </label>
            <input
              onChange={props.handleChange}
              className="form-control"
              type="password"
              name="password"
              value={props.data.password}
            />
          </div>
          <button className="btn btn-primary"> Ingresar</button>
          <button className="btn btn-success"> Verificar</button>
        </form>
      </div>
    </div>
  );
};

class Login extends Component {
  initialState = {
    data: {
      email: "",
      password: ""
    }
  };

  auth = new authService();

  state = { ...this.initialState };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.auth
      .login(this.state.data.email, this.state.data.password)
      .then(resp => {
        this.props.onAuthChange();
        this.props.history.replace("/");
        console.log(this.props.history);
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <FormularioLogin
        handleChange={this.handleChange}
        data={this.state.data}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default withRouter(Login);

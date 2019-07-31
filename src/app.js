import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import AuthService from "./services/AuthService";
import Home from "./pages/Home";

class App extends Component {
  auth = new AuthService();
  state = {
    visible: this.auth.isLoggedIn()
  };

  
  onAuthChange = () => {
    this.setState({ visible: this.auth.isLoggedIn() });
  };

  render() {
    console.log(this.state.visible);
    if (this.state.visible) {
      return <Home />;
    }

    return (
      <HashRouter>
        <Switch>
          <Route
            path="/Login"
            render={routerProps => (
              <Login {...routerProps} onAuthChange={this.onAuthChange} />
            )}
          />
          <Redirect from="*" to="/Login" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

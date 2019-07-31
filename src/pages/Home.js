import React, { Component } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import Categoria from "./Categoria";
import Articulo from "./Articulo";
import CategoriaForm from "../components/Categoria/CategoriaForm";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Home extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    return (
      <HashRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <h1>Hola</h1>;
              }}
            />
            <Route exacts path="/categoria" component={Categoria} />
            <Route exact path="/categoria/agregar" component={CategoriaForm} />
            <Route exact path="/articulo" component={Articulo} />
            <Route
              exact
              component={() => {
                return (
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle caret>Dropdown</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Header</DropdownItem>
                      <DropdownItem>Some Action</DropdownItem>
                      <DropdownItem disabled>Action (disabled)</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Foo Action</DropdownItem>
                      <DropdownItem>Bar Action</DropdownItem>
                      <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                );
              }}
            />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </HashRouter>
    );
  }
}

export default Home;

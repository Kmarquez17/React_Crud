import React, { Component } from "react";
import Request from "../services/Requests";
import Tabla from "../components/Tabla/Tabla";
const request = new Request();
class Articulo extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.cargarDatos();
  }

  cargarDatos = () => {
    request.list("/articulo/list").then(res => {
      this.setState({
        data: res
      });
    });
  };

  render() {
    const datos = this.state.data;
    return (
      <div>
        <Tabla
          titulo="Articulos"
          data={datos}
          path={`${this.props.history.location.pathname}`}
        />
      </div>
    );
  }
}

export default Articulo;

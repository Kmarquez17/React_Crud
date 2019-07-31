import React, { Component } from "react";
import Request from "../services/Requests";
import Tabla from "../components/Tabla/Tabla";
const request = new Request();
class Categoria extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.cargarDatos();
  }

  cargarDatos = () => {
    request.list("/categoria/list").then(res => {
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
          titulo="Categorias"
          data={datos}
          path={`${this.props.history.location.pathname}`}
        />
      </div>
    );
  }
}

export default Categoria;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Tabla extends Component {
  state = { filtro: "" };

  handleChange = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ filtro: value.toLowerCase() });
    // const newList = this.props.data.filter(item => item.nombre.toLowerCase().indexOf(this.state.filtro) >= 0)
    // console.log(newList)
  }; 

  render() {
    const datos = this.props.data;
    console.log(this.props.path);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>{this.props.titulo}</h1>
            <Link
              to={`${this.props.path}${"/agregar"}`}
              className="btn btn-primary mb-1"
            >
              Agregar
            </Link>
          </div>
          <div className="col-lg-3">
            <label>Buscar</label>
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                onChange={this.handleChange}
                placeholder="Filtrar datos"
              />
            </div>
          </div>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((data, index) => {
              if (
                this.state.filtro.length === 0 ||
                data.nombre.toLowerCase().search(this.state.filtro) > -1 ||
                data.descripcion.toLowerCase().search(this.state.filtro) > -1
              ) {
                // console.log(data.nombre.toLowerCase().search(this.state.filtro))
                return (
                  <tr key={data._id}>
                    <th scope="row">{index}</th>
                    <td>{data.nombre}</td>
                    <td>{data.descripcion}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-success mr-2 mb-1"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          console.log(`Eliminando el id ${data._id}`);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tabla;

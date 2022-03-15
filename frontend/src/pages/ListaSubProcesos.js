import { Card, Container, Row, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const ListaSubProcesos = () => {
    const location = useLocation();
    const { from , parent} = location.state
    
    return (
        <>
        <h1>Lista de Sub Procesos</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nombre Proceso</th>
              <th scope="col">PID</th>
              <th scope="col">PID del Padre</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
          {from.map((val,key) => {
              return (
                <tr>
                  <th scope="row">{key}</th>
                  <td>{val.ProcesoHijo}</td>
                  <td>{val.PID}</td>
                  <td>{parent}</td>
                  <td>{val.Estado}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </>
    );
}

export default ListaSubProcesos;
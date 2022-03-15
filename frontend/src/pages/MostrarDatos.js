import { Card, Container, Row, Button } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

const DatosLogs1 = () => {
    const location = useLocation();
    const { from } = location.state
    
    return (
        <>
        <h1>Datos Log</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Ram Free</th>
              <th scope="col">Porcentaje</th>
              <th scope="col">Ram Total</th>
              <th scope="col">Ram Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th> {from.ramFree}</th>
                <td>{from.ramPercentage}</td>
                <td>{from.ramTotal}</td>
                <td>{from.ramUse}</td>
            </tr>
          </tbody>
        </table>
        </>
    );
}

export default DatosLogs1;
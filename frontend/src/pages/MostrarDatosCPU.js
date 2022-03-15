import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function LogsCPU() {
    const location = useLocation();
    const { from } = location.state
  const [info, setinfo] = useState([]);
  const getDatos = async () => {
    setinfo(JSON.parse(from));
  };
  
  useEffect(() => {
    setInterval(() =>{
      getDatos();
    },3000);
  }, []);
  return (
    <>
    <h1>Lista de Procesos</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">VM</th>
          <th scope="col">Nombre Proceso</th>
          <th scope="col">PID</th>
          <th scope="col">PID del Padre</th>
          <th scope="col">Estado</th>
          <th scope="col">Hijos</th>
        </tr>
      </thead>
      <tbody>
      {info.map((val,key) => {
          return (
            <tr>
              <th scope="row">{key}</th>
              <td>{val.Proceso}</td>
              <td>{val.PID}</td>
              <td>{val.PPID}</td>
              <td>{val.Estado}</td>
              <td><Link to="/ListaSub" state={{ from: val.Hijos , parent: val.PID}}>Ver Lista</Link></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  );
}

export default LogsCPU;

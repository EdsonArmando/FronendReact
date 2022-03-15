import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function ListaProcesos() {
  const [info, setinfo] = useState([]);
  const getDatos = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('En ejecucion Lista de Procesos');
    const response = await fetch("http://35.219.177.18/getProcessData", requestOptions);
    const json = await response.json();
    setinfo(json);
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
      {info.map((val) => {
          return (
            <tr>
              <th scope="row">{val.maquina}</th>
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

export default ListaProcesos;

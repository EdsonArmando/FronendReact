import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { rif } from '../Rif';
import socketIOClient from "socket.io-client";
const ENDPOINT = "https://proyectos-usac.ue.r.appspot.com";
function LIstaLogs() {
    const [info, setinfo] = useState([]);
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    setInterval(() =>{
    socket.emit('getReport', {
        "type": "RAM"
    });
    socket.on('updatedReport', function(info){
        setinfo(info.registros);
    });
    },5000);
  }, []);
  return (
    <>
    <h1>Logs</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">VM</th>
          <th scope="col">Date</th>
          <th scope="col">Endpoint</th>
          <th scope="col">IdLog</th>
        </tr>
      </thead>
      <tbody>
      {info.map((val) => {
          return (
            <tr>
              <th scope="row">{val.nombre_vm}</th>
              <td>{val.date}</td>
              <td>{val.endpoint}</td>
              <td>{val._id}</td>
              {rif(
                  val.endpoint == '/getRamData',
                  <td><Link to="/ListaSubRam" state={{ from: val.ramData}}>Ver Datos Ram</Link></td>,
                  <td><Link to="/ListaLogsCPU" state={{ from: val.data}}>Ver Datos CPU</Link></td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
    </>
  );
}

export default LIstaLogs;

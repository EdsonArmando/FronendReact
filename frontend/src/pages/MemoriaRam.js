import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import '../../src/App.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Porcentaje Uso Memoria Ram',
    },
  },
};
var {totalRam, RamUso, Porcentaje, Libre} = "";
var {totalRam2, RamUso2, Porcentaje2, Libre2} = "";
const api_host = 'http://35.219.177.18';
const porcentajeMemoria1 = [1];
const porcentajeMemoria2 = [1];
function MemoriaRam() {
  const [info, setinfo] = useState([]);
  const getDatos = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('En ejecucion Ram');
    const response = await fetch(`${api_host}/getRamData`, requestOptions);
    const json = await response.json();
    if(json.nombre_vm == "VM1"){
      porcentajeMemoria2.push(json.ramData.ramPercentage);
      totalRam2 = json.ramData.ramTotal;
      RamUso2 = json.ramData.ramUse;
      Porcentaje2 = json.ramData.ramPercentage;
      Libre2 = json.ramData.ramFree;
    }else{
      totalRam = json.ramData.ramTotal;
      RamUso = json.ramData.ramUse;
      Porcentaje = json.ramData.ramPercentage;
      Libre = json.ramData.ramFree;
      porcentajeMemoria1.push(json.ramData.ramPercentage);
    }
    setinfo(json);
  };
  useEffect(() => {
    setInterval(() =>{
      getDatos();
    },3000);
  }, []);
  const labels = porcentajeMemoria1.map((item) => {
    return item + "%";
  });
  //const labels = [10,20,30,40,50,60,70,80,90,100];
  const data = {
    labels,
    datasets: [
      {
        label: 'Ram PC2',
        data: porcentajeMemoria2.map((item) => {
          return item;
        }),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Ram PC1',
        data: porcentajeMemoria1.map((item) => {
          return item;
        }),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <>
    <div className="padre"> 
    <div className="test">
        <h1>Datos Maquina Virtual 1</h1> 
        <table className="table table-hover">
        <tr>
          <th>Total RAM</th>
          <th>RAM Uso</th>
          <th>Porcentaje RAM</th>
          <th>Libre</th>
        </tr>
        <tr>
          <td>{totalRam}</td>
          <td>{RamUso}</td>
          <td>{Porcentaje}</td>
          <td>{Libre}</td>
        </tr>
      </table>
    </div>
    <div className="test">
        <h1>Datos Maquina Virtual 2</h1> 
        <table className="table table-hover">
        <tr>
          <th>Total RAM</th>
          <th>RAM Uso</th>
          <th>Porcentaje RAM</th>
          <th>Libre</th>
        </tr>
        <tr>
          <td>{totalRam2}</td>
          <td>{RamUso2}</td>
          <td>{Porcentaje2}</td>
          <td>{Libre2}</td>
        </tr>
      </table>
    </div>
    </div>
    <div className="borrow">
      <div className="maindiv">
        <h1>MemoriaRam</h1>
        <Line options={options} data={data} />
      </div>
    </div>
    </>
  );
}

export default MemoriaRam;

import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import Etherpad from "../Etherpad"

export default function existingPads() {
  ///API CALL EXAMPLE
  ///http://localhost:9001/api/$APIVERSION/$FUNCTIONNAME?param1=value1
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [padID, setPadID] = useState(null);

  useEffect(() => {
    fetchPads();
  }, []); // Empty dependency array ensures this runs once after the initial render

  const fetchPads = () =>{
    axios.get('http://localhost:9001/api/1.2.1/listAllPads?apikey=f4981f099329cdfeb7d60a42fbdfb7d31c180dce70deef222fa173c60faa01b4')
    .then(response => {
      setData(response.data.data.padIDs);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }
  

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const  handlePadClick= (padName) => {
    setPadID(padName);
  }

  return (
    <div className='container'>
      <h2>Selecciona un pad</h2>
    {data.map((pad, id) => (
      <ul key={id}>
        <li onClick={() => handlePadClick(pad)}>{pad}</li>
      </ul>
    ))}

    {padID? padID + " ah sido seleccionado. ": "no existe"}
  </div>
  );
};

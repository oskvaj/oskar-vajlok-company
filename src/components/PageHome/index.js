import React, { useState } from 'react';
import data from '../../data';
import DataTable from '../DataTable';
import './style.css';

function PageHome() {
  const [ season, setSeason ] = useState("0");
  
  const parsedData = () => {
    return JSON.parse(data);
}

  return (
    <div className="PageHome">
      <select 
        className="slider" 
        onChange={
          (e) => setSeason(e.target.value)
        }>
        {parsedData().map((item, i) => {
          return <option value={i}>{item.name}</option>
        })}
      </select>
      <DataTable season={season}/>
    </div>
  );
}

export default PageHome;

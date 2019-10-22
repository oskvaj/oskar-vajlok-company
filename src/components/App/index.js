import React, { useState } from 'react';
import data from '../../data';
import DataTable from '../DataTable';
import './style.css';

function App() {
  const [ season, setSeason ] = useState("5");
  
  return (
    <div className="App">
      <header>
        <p className="App-Header">Site header</p>
        <div>
          <button className="App-Button">About us</button>
        </div>
      </header>
      <select 
        className="Slider" 
        onChange={
          (e) => setSeason(e.target.value)
        }>
				<option value="5">Fall 2019</option>
				<option value="4">Summer 2019</option>
				<option value="3">Spring 2019</option>
				<option value="2">Winter 2019</option>
				<option value="1">Fall 2018</option>
				<option value="0">Before Website Creation</option>
			</select>
      <DataTable season={season}/>
    </div>
  );
}

export default App;

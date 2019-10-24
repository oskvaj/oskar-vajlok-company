import React from 'react';
import data from '../../data.js';
import './style.css'

function DataTable(props) {
    const parsedData = () => {
        return JSON.parse(data);
    }

    return (
        <div>
            <h1 className="centeredText">{parsedData()[props.season].name}</h1>
            <ul>
                {parsedData()[props.season].items.map((item) => {
                    return <li className="DataTable">
                        <img className="image" src={item.image} alt={"bild på " + item.name}/>
                        <h3 className="title">{item.name}</h3>
                        {item.price && <p className="price">price: {item.price}</p>}
                        {item.link && <a className="ButtonPosition" href={item.link} target="_blank" rel="noopener noreferrer"><button className="Button">Take me to the store</button></a>}
                        <p className="status">Experience: {item.personalStatus}</p>
                        <p className="description">{item.description}</p>
                        <p className="recomendation">{item.recomendation}</p>
                    </li>
                })}
            </ul>
            
        </div>
    );
}

export default DataTable;
import React from 'react';
import data from '../../data.js';
import './style.css'

function DataTable(props) {
    const parsedData = () => {
        return JSON.parse(data);
    }

    return (
        <div>
            {/* <div className="Image"/> */}
            <h1 className="centeredText">{parsedData()[props.season].name}</h1>
            {/* <a href={data[i].link} target="_blank"><img src={data[i].image} alt={"namn på " + data[i].namn}></img></a>
            </div>
            <p className="title">{data[i].namn}</p>
            <p className="price">price: {data[i].price}</p>
            <p className="description">{data[i].description}</p>
            <p calssName="recomendation">Recomendation: {data[i].rekomendation}</p> */}
            <ul>
                {parsedData()[props.season].items.map((item) => {
                    return <li className="DataTable">
                        <img className="image" src={item.image} alt={"bild på " + item.name}/>
                        <h3 className="title">{item.name}</h3>
                        {item.price && <p className="price">price: {item.price}</p>}
                        {item.link && <a href={item.link} target="_blank"><button className="Button">Take me to the store</button></a>}
                        <p className="status">My personal status: {item.personalStatus}</p>
                        <p className="description">{item.description}</p>
                        <p className="recomendation">{item.recomendation}</p>
                    </li>
                })}
            </ul>
            
        </div>
    );
}

export default DataTable;
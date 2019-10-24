import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigation() {
    return(
        <header className="Navigation">
            <p className="header">My Objective Opinion List</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <button className="buttonOne">Home</button>
                        </Link>
                    </li>
                    <div class="marginRight"></div>
                    <li>
                        <Link to="/about">
                            <button className="buttonTwo">About us</button>
                        </Link>
                    </li>
                    <div class="marginRight"></div>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
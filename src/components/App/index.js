import React from 'react';
import PageHome from "../PageHome";
import PageAbout from "../PageAbout";
import Navigation from "../Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";
import './style.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <div className="pageContent">
          <Route exact path="/" component={PageHome}/>
          <Route exact path="/about" component={PageAbout}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
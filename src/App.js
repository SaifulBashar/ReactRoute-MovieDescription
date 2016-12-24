import React, { Component } from 'react';
import { Router,Route,IndexRoute,hashHistory,browserHistory } from "react-router";
import "./index.css";
import Plot from "./plot"
import Poster from "./poster"
//import movie from "./images.jpg";
class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Poster}/>
            <Route path="plot" component={Plot}/>
        </Router>

    );
  }
}

export default App;

/**
 * Created by saiful on 12/24/16.
 */


import React, { Component } from 'react';
import {Link} from "react-router";
import "./index.css";

import movie from "./images.jpg";
{/*<img className="poster" src={movie} alt="movie" height={"500px"} width={"310" + "px"}/>*/}


class Poster extends Component {
    constructor(props){
        super(props);
        this.rating = "8.6";
    }

    render() {
        return (

        <div className="row firstrow">
            <div className=" col-md-6 mposter">
                <img className="poster" src={movie} alt="movie" height={"500px"} width={"310" + "px"}/>

            </div>
            <div className="col-md-6 info">
                <p>Imdb rating : {this.rating}</p>
                <p><Link to="/plot"><button className="btn btn-info btn-lg ">INFO</button></Link></p>
            </div>
        </div>



        );
    }
}

export default Poster;

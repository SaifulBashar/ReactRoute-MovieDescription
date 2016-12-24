/**
 * Created by saiful on 12/24/16.
 */

/**
 * Created by saiful on 12/24/16.
 */


import React, { Component } from 'react';
import "./index.css";
import {Link} from "react-router";
import movie from "./images.jpg";
{/*<img className="poster" src={movie} alt="movie" height={"500px"} width={"310" + "px"}/>*/}


class Plot extends Component {
    constructor(props){
        super(props);
        this.plot = `Sometime in the 21st century, crop blight on Earth has made farming increasingly difficult and threatens humanity's survival. Joseph Cooper, a widowed former NASA pilot, runs a farm with his father-in-law, son, and daughter Murphy, who believes her bedroom is haunted by a poltergeist. When a pattern is created out of dust on the floor, Cooper realizes that gravity is behind its formation, not a "ghost". He interprets the pattern as a set of geographic coordinates formed into binary code. Cooper and Murphy follow them to a secret NASA facility, where they are met by Cooper's former professor Dr. Brand.
        Brand reveals that a wormhole mysteriously appeared near Saturn 48 years earlier, opening a pathway to a distant galaxy with potentially-habitable planets. Twelve volunteers traveled through it to assess each planet's suitability as humanity's new home, led by Dr. Mann. Volunteers Miller, Edmunds and Mann have sent back encouraging data from planets near a black hole called Gargantua. Brand recruits Cooper to pilot the spaceship Endurance to investigate further, while he works on "Plan A" – a gravitational theory for propulsion that would allow an exodus from Earth. The Endurance also carries 5,000 frozen embryos for the "Plan B" backup plan, which is to colonize a habitable planet to ensure humanity's survival. Cooper agrees to go, upsetting Murphy.
        Cooper's crew consists of scientists Romilly, Doyle, Brand's daughter Amelia, and robots TARS and CASE. Traversing the wormhole, they head to Miller's planet, an ocean world where time is severely dilated because of its proximity to Gargantua; for each hour there, seven years pass on Earth. They find only the wreckage from Miller's expedition. Amelia retrieves Miller's data just before a gigantic wave hits, killing Doyle and water-logging the engines. After returning to Endurance, they discover 23 years have elapsed on Earth.
        Murphy, now an adult, has been assisting Dr. Brand with his research. On his deathbed, he admits to her that Plan A was not feasible – he has known since Endurance departed. He reveals that Plan B was the only plan all along. In a recorded video session Murphy notifies Amelia of her father's death, accusing her and Cooper of abandoning Earth. Believing the equations can be solved, she continues working on a solution to Plan A knowing she needs more data on gravitational singularities.
        With limited fuel, the crew choose Mann's planet over Edmunds' as the next stop, since Mann is still transmitting. Once there, Mann assures the crew that the frozen planet is habitable despite its ammonia-laden atmosphere. While surveying the planet, Mann attempts to kill Cooper, revealing that he falsified the data in hopes of being rescued. He steals Cooper's ranger and heads for Endurance. Meanwhile, Romilly is killed by a booby trap set by Mann. Amelia rescues Cooper and they race to Endurance in a second lander, where Mann is attempting a dangerous manual docking operation. Mann ignores Cooper's warnings and is killed in the attempt, severely damaging the Endurance in the process. Cooper uses the lander to stabilize the ship.CASE warns Cooper that Endurance is slipping toward Gargantua's pull. Cooper makes a quick decision to use Gargantua as a gravitational slingshot to propel the ship toward Edmunds' planet, but their proximity to Gargantua means more time will elapse on Earth. To shed weight, Cooper and TARS jettison themselves toward the black hole, so that Amelia and CASE can complete the journey. Slipping past the event horizon, Cooper and TARS find themselves inside a tesseract, which resembles a stream of bookshelves capable of peering into Murphy's bedroom at different periods in her life. Cooper surmises that the tesseract and wormhole were created to enable communication with Murphy, and that he was her "ghost" all along. Using the second-hand on the watch he gave her before he left, Cooper relays the quantum data Murphy needs to solve the gravitational equation.
        Following a turbulent ejection, Cooper awakens in a space habitat orbiting Saturn. He reunites with an aged Murphy nearing death. At Murphy's request, Cooper and TARS leave to rejoin a still young Amelia on Edmunds' habitable planet, where she is preparing a new human colony.`;
    }

    render() {
        return (
            <div className="plot text-left">
                <h1>PLOT</h1>
                <p>{this.plot}</p>
                <Link to="/"><button className="btn btn-lg btn-danger">Back Home</button></Link>
            </div>

        );
    }
}
export default Plot;
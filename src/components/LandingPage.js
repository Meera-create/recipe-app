import React from 'react';
import { NavLink } from "react-router-dom";
import '../../src/styles/components/_landing-page.scss'

const Landing = () => {
    
    return (
        <div className="landing-page">
            <h1 className="title-landing"> THE PANTRY </h1>
            <h2 className="sub">Hungry? But not sure what to cook tonight? Need inspiration? </h2>
            <h2 className="sub">Not a problem!</h2>
            <button className="button-enter"type="button">
                <NavLink to="homepage">ENTER</NavLink>
                </button>
             
        </div>
    )
}
                

export default Landing;
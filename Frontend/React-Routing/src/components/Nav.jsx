import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";
function Nav(){
    return (
        <>
            <div className="nav">
                <h1>Logo</h1>
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    <NavLink to="/About" > AboutUs</NavLink>
                    <NavLink to="/ContactUs"><li>Contact Us</li></NavLink>
                </ul>
            </div>
        </>
    )
}

export default Nav
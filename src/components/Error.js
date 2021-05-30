import React from "react";
import { NavLink } from "react-router-dom"

const Error = () => {
    return(
        <>
        <div className="setStyle2">
        <h1>404 Error Page</h1>
        <p>sorry, this page doesn't exist</p>
        <NavLink to="/" className="btn2">Go Back</NavLink>
        </div>
        </>
    ) 
}
export default Error
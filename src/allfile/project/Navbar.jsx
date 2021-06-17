import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    
    return(
        <>
        <nav className="Navbar">
           <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
           <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
           <NavLink exact activeClassName="active_class" to="/servics">Servics</NavLink>
        </nav>
        </>
    );
}

export default Navbar;
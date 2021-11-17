import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <div className="nav-flex-container">
        <Link to={'/'}><i class="fas fa-home fa-3x purpleiconcolor" style={{width: "200%",height: "200%"}}></i></Link>

    </div>
);

export default NavBar;
import React from "react";
import logo from "../assets/imgs/logo192.png"
import {Link} from "react-router-dom"
import './Logo.css';

export default function AppLogo(){
    return(
        <aside className="logo">
            <Link to="/">
                <img className="linkLogo" src={logo} alt="Logo da página"/>
            </Link>
        </aside>
    )
}
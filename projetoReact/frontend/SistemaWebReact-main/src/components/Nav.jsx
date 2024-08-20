import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faUser } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

export default function AppNav() {
    return (
        <aside className="menu-area ">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to="/" className="nav-link text-secondary text-black">
                                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link text-secondary text-black" to="/sobre">
                                    <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link text-secondary text-black"  to="/perfil">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    Perfil
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </aside>
    )
}
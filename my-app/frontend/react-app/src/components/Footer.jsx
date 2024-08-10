import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function FooterApp(){
    return (
        <footer className="footer">
            <FontAwesomeIcon icon={faLaptop} size="1x">
            </FontAwesomeIcon>
            <p>
                <FontAwesomeIcon icon={faCode} size="1x">
                </FontAwesomeIcon>
                Desenvolvido com React
                <FontAwesomeIcon icon={faCode} size="1x">
                </FontAwesomeIcon>
            </p>
            
        </footer>
    )
}
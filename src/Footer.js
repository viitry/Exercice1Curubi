import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <span>Nous contacter</span>
                <span>Legal notice</span>
                <span>CGU</span>
                <span>Conditions d'utilisation</span>
            </div>
            <div className="red-bar"></div>
            <div className="social">
                <a href="" className="link">Facebook</a>
                <a href="" className="link">X</a>
                <a href="" className="link">Instagram</a>
                <a href="" className="link">Linkedin</a>
                <a href="" className="link">Youtube</a>
            </div>
            <div className="white-bar"></div>

        </footer>
    );
}

export default Footer;

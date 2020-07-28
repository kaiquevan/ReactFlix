import React from 'react';
import Logo from '../Menu/logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/index.js';


function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MamusFlix logo"/>
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
              
        </nav>
    );
}

export default Menu;
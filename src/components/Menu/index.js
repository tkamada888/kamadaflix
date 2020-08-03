import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Flix120.png';
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="KamadaFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
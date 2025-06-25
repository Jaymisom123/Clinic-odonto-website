import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import './Navbar.scss';

const Navbar = () => {

    const navbarItems = [
        {
            name: 'Início',
            path: '/',
        },
        {
            name: 'Sobre Nós',
            path: '/about',
        },
        {
            name: 'Serviços',
            path: '/singleservice',
        },
        {
            name: 'Blog',
            path: '/blogs',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Ferreira Matos Odontologia" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map ((navSingle, index) =>
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            <div className="theme-btn">
                                <a href="https://wa.me/556499606045" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
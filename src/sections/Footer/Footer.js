import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import location from '../../assets/footer/location.png';
import time from '../../assets/footer/time.png';
import logo from '../../assets/footer_logo.png';
import './Footer.scss';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'Sobre Nós',
            'link' : '/'
        },
        {
            'name' : 'Serviços Odontológicos',
            'link' : '/'
        },
        {
            'name' : 'Dentistas',
            'link' : '/'
        },
        {
            'name' : 'Blog',
            'link' : '/'
        },
        {
            'name' : 'FAQ',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Telefone Unidade Centro',
            'info': '(64) 99955-3163',
            'icon': call
        },
        {
            'title': 'Telefone Unidade Fátima',
            'info': '(64) 98145-7994',
            'icon': call
        },
        {
            'title': 'Horário de Funcionamento',
            'info': '08:00 AM - 18:00 PM',
            'icon': time
        },
        {
            'title': 'Unidade Centro',
            'info': 'Av. José Marcelino, 168 – Catalão-GO',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>A Ferreira Matos Odontologia foca no atendimento acolhedor e humanizado, oferecendo um ambiente tranquilo para todos os pacientes em Catalão-GO</p>

                        <div className="social-logo">
                            <p>Siga-nos nas redes</p>
                            <ul>
                                <li><a href="/"><FaFacebookF/></a></li>
                                <li><a href="/"><FaTwitter/></a></li>
                                <li><a href="/"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Links Rápidos</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contato & Informações</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h5>{footerContact.info}</h5>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; Ferreira Matos Odontologia. Todos os Direitos Reservados</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Termos de Uso</Link></li>
                            <li><Link to='/'>Política de Privacidade</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;
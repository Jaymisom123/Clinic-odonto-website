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

    const footerServices = [
        {
            'name' : 'Ortodontia',
            'link' : '/'
        },
        {
            'name' : 'Implantes',
            'link' : '/'
        },
        {
            'name' : 'Lentes de Contato',
            'link' : '/'
        },
        {
            'name' : 'Clareamento',
            'link' : '/'
        },
        {
            'name' : 'Próteses',
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
        <footer className='footer-section'>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-description">
                            A Ferreira Matos Odontologia foca no atendimento acolhedor e humanizado, oferecendo um ambiente tranquilo para todos os pacientes em Catalão-GO
                        </div>

                        <div className="footer-social">
                            <div className="social-title">Siga-nos nas redes</div>
                            <div className="social-links">
                                <a href="/"><FaFacebookF/></a>
                                <a href="/"><FaTwitter/></a>
                                <a href="/"><FaInstagram/></a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Links Rápidos</h4>
                        <ul>
                            {
                                footerMenu.map((singleMenu, index) => (
                                    <li key={index}>
                                        <Link to={singleMenu.link}>{singleMenu.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer-services">
                        <h4>Serviços</h4>
                        <ul>
                            {
                                footerServices.map((service, index) => (
                                    <li key={index}>
                                        <Link to={service.link}>{service.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contato & Informações</h4>
                        {
                            footerContacts.map((footerContact, index) => (
                                <div key={index} className="contact-item">
                                    <div className="icon">
                                        <img src={footerContact.icon} alt={footerContact.title} />
                                    </div>
                                    <div className="contact-text">
                                        <div className="contact-label">{footerContact.title}</div>
                                        <div className="contact-value">{footerContact.info}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <div className="copyright">
                            &copy; <a href="/">Ferreira Matos Odontologia</a>. Todos os Direitos Reservados
                        </div>  
                        <div className="footer-bottom-links">
                            <ul>
                                <li><Link to='/'>Termos de Uso</Link></li>
                                <li><Link to='/'>Política de Privacidade</Link></li>
                            </ul>
                        </div>                          
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
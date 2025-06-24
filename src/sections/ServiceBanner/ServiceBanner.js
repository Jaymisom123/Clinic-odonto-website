import React from 'react';
import { Link } from 'react-router-dom';
import serviceBanner from '../../assets/servicePage/1.png';
import './ServiceBanner.scss';

const ServiceBanner = () => {
    return (
        <section className='service-banner-section section-common section-bg'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <div className="service-banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h2>Tratamento de Canal</h2>
                                    <p>O tratamento de canal tem uma má reputação, mas nós dentistas não sabemos por quê! Estes são os tipos de tratamentos que realmente fazem você se sentir melhor!</p>
                                    <div className="theme-btn">
                                        <Link to="/">Agendar Consulta</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="service-banner-img" data-aos="fade-up" data-aos-duration="2000">
                                    <img src={serviceBanner} alt="service" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;
import React from 'react';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import icon from '../../assets/banner/icons/Calling.png';
import shapeFour from '../../assets/banner/pattern.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import './Banner.scss';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            {/* Video Background */}
            <div className="video-background">
                <video autoPlay muted loop className="background-video">
                    <source src="/video-background.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>

            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Confie seu sorriso aos profissionais</h1>
                                    <p>A clínica foca no atendimento acolhedor e humanizado, oferecendo um ambiente tranquilo para pacientes com traumas, medo ou necessidades especiais.</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <a href="https://wa.me/556499606045" target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Urgência Odontológica 24H</p>
                                                <h6>(64) 98145-7994</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box'>
                                        <div className="info-img">
                                            <img src={doctorImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dra. Alba Carina</p>
                                            <p><small>Especialista</small></p>
                                        </div>
                                    </div>  

                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;
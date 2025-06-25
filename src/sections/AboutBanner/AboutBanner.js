import React from 'react';
import bannerOne from '../../assets/about/banner/banner_1.png';
import bannerTwo from '../../assets/about/banner/banner_2.png';
import pattern from '../../assets/banner/pattern.png';
import './AboutBanner.scss';

const AboutBanner = () => {
    return (
        <section className='about-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>Conheça nossas Clínicas Odontológicas</h2>
                                    <p>Ir ao dentista não precisa ser sinônimo de medo ou desconforto. Nós somos profissionais acolhedores, que transformam a experiência do consultório odontológico em algo leve, respeitoso e até prazeroso.</p>

                                    <div className="theme-btn">
                                        <a href='https://wa.me/556499606045' target="_blank" rel="noopener noreferrer">Entre em Contato</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    <img src={bannerTwo} alt="about banner two"/>
                                    <img className='pattern' src={pattern} alt="about banner two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
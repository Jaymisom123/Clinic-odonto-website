import React from 'react';
import EmergencyImg from '../../assets/emergency.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Emergency.scss';

const Emergency = () => {
    return (
        <section className='emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-img">
                            <img src={EmergencyImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="emergency-text">
                            <SectionTitle subTitle="Urgência Odontológica 24H" title="Tratamento gentil e amigável da nossa prática local." description="A clínica foca no atendimento acolhedor e humanizado, oferecendo um ambiente tranquilo para pacientes com traumas, medo ou necessidades especiais."/>

                                                          <div className="theme-btn">
                                 <a href='https://wa.me/556499606045' target="_blank" rel="noopener noreferrer">Agendar Consulta</a>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Emergency;
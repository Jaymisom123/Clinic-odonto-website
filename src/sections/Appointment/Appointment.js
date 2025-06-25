import React from 'react';
import { AiFillHome } from "react-icons/ai";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Appointment.scss';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7!2d-47.9463!3d-18.1664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a19d1e8e9f5d5f%3A0x1!2sCatal%C3%A3o%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1666254073802!5m2!1spt-BR!2sbr'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        <div className="appointment-info-area text-center">
                            <SectionTitle 
                            subTitle="NOSSAS UNIDADES"
                            title="Visite uma de nossas clínicas em Catalão - GO"
                            description="Temos duas unidades estrategicamente localizadas para melhor atendê-lo. Entre em contato pelos telefones ou WhatsApp para agendar sua consulta."
                            />
                            
                            <div className="contact-info mt-5">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="unit-info">
                                            <h4>📍 Unidade Centro</h4>
                                            <p><strong>Endereço:</strong><br/>Av. José Marcelino, 168 – Catalão-GO</p>
                                            <p><strong>Telefone:</strong><br/>(64) 99955-3163</p>
                                            <p><strong>Email:</strong><br/>ferreiraematosodonto@hotmail.com</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="unit-info">
                                            <h4>📍 Unidade Nossa Senhora de Fátima</h4>
                                            <p><strong>Endereço:</strong><br/>Rua Frederico Campos, 780 – Catalão-GO</p>
                                            <p><strong>Telefone:</strong><br/>(64) 98145-7994</p>
                                            <p><strong>Email:</strong><br/>ferreiramatosodontologia@hotmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-10">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Catalão - GO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
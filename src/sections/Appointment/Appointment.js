import React from 'react';
import { AiFillHome } from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Appointment.scss';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7!2d-47.9463!3d-18.1664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a19d1e8e9f5d5f%3A0x1!2sCatal%C3%A3o%2C%20GO!5e0!3m2!1spt-BR!2sbr!4v1666254073802!5m2!1spt-BR!2sbr'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>Av. José Marcelino, 168 – Catalão-GO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="AGENDAR CONSULTA"
                            title="Cuidado na Ferreira Matos é prazer"
                            description="Atendimento acolhedor com confiança, empatia e respeito. Clareza na explicação dos procedimentos e tratamento centrado no paciente."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
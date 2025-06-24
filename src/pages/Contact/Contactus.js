import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Navbar from '../../components/Navbar/Navbar';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Footer from '../../sections/Footer/Footer';
import './Contactus.scss';

const Contactus = () => {
    return (
        <>
            <section className='section-bg section-common contact-section'>
                <Navbar />
                <SectionTitle 
                    title="Entre em Contato"
                    description="Entre em contato conosco para agendar sua consulta ou esclarecer dúvidas sobre nossos serviços odontológicos."
                />
            </section>
            <section className='contact-form-area' data-aos="fade-up" data-aos-duration="2000">
                <ContactForm />
            </section>
            <Footer />
        </>
    );
};

export default Contactus;
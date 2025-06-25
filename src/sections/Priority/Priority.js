import React from 'react';
import priorityImg from '../../assets/about/priority.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Priority.scss';

const Priority = () => {
    return (
        <section className='priority-section emergency-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-img">
                            <img src={priorityImg} alt="Emergency" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="priority-text">
                            <SectionTitle 
                                subTitle="NOSSO COMPROMISSO COM VOCÊ" 
                                title="Cuidado, Respeito e Dedicação"
                                description="No consultório, cada paciente é mais do que um prontuário — é uma história, uma vida e, muitas vezes, alguém que chega com medo, insegurança ou experiências anteriores negativas. Por isso, acreditamos que o atendimento odontológico deve ser, antes de tudo, acolhedor. Aqui, ouvir é tão importante quanto tratar."
                            />

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

export default Priority;
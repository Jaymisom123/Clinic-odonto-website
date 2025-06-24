import React from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Expert.scss';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="CRIANDO EXPERIÊNCIAS NOVAS"
                                title="Para que nosso paciente perca o medo de algum trauma do passado"
                                description="Criamos um ambiente onde o paciente se sente seguro, respeitado e amparado. O tom de voz, o tempo dedicado à explicação de cada procedimento, o cuidado em respeitar limites e emoções."
                            />

                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Atendimento acolhedor e humanizado
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Especialistas em necessidades especiais (TEA, TDAH, TOD)
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Transformando medo em confiança
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;
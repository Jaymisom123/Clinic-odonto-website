import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Faq.scss';

const Faq = () => {
    return (
        <section className='faq-section pt-100 pb-70'  data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="FAQ"
                    title="Perguntas Frequentes"
                />

                <div className="accordian-area">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Vocês atendem crianças com autismo, TDAH e TOD?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Sim! Nossa clínica é especializada no atendimento acolhedor para crianças com necessidades especiais (TEA, TDAH, TOD). Oferecemos um ambiente tranquilo e respeitoso.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Quais convênios vocês aceitam?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Trabalhamos com os principais convênios odontológicos do mercado. Entre em contato para verificar se seu plano é aceito.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Como funciona o atendimento de urgência?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Oferecemos atendimento de urgência 24h. Entre em contato pelo (64) 98145-7994 para emergências odontológicas.
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Vocês fazem implantes dentários?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                Sim! Temos especialista em implantodontia, Dr. Juliano Franco Rosa, que realiza implantes totais, individuais e protocolos.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
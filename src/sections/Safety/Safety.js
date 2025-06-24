import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Safety.scss';

const Safety = () => {
    return (
        <section className='safty-section pt-100 section-bg section-common pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Segurança"
                    title="Colocamos a segurança em primeiro lugar"
                    description="Priorizamos protocolos de segurança rigorosos e cuidados especiais para garantir o bem-estar de todos os nossos pacientes."
                />

                <div className="safety-video ratio ratio-16x9">
                    <iframe src="https://www.youtube.com/embed/f4jG8BCl5s0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Safety;
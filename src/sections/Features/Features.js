import React from 'react';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Features.scss';
import featuresData from './FeaturesData';

const Features = () => {
    return (
        <section className='section-bg section-common features-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle subTitle="Características" title="Cuidado especializado através da experiência" description="Atendimento acolhedor com confiança, empatia e respeito. Clareza na explicação dos procedimentos e tratamento centrado no paciente."/>

                <div className="row align-items-center">
                    {
                        featuresData.map(singleFeature => 
                            <IconList 
                                icon={singleFeature.icon} 
                                title={singleFeature.title}
                                description={singleFeature.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;
import React from 'react';
import iconOne from '../../assets/symptoms/1.png';
import iconTwo from '../../assets/symptoms/2.png';
import iconThree from '../../assets/symptoms/3.png';
import iconFour from '../../assets/symptoms/4.png';
import iconFive from '../../assets/symptoms/5.png';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Symptoms.scss';

const Symptoms = () => {
    const symptomsData = [
        {
            'icon' : iconOne,
            'title' : 'Dor espontânea',
            'description':'Dor espontânea mesmo quando você não está comendo ou bebendo' 
        },
        {
            'icon' : iconTwo,
            'title' : 'Descoloração do dente',
            'description':'Escurecimento ou descoloração de um dente' 
        },
        {
            'icon' : iconThree,
            'title' : 'Dor noturna',
            'description':'Dor que te acorda no meio da noite' 
        },
        {
            'icon' : iconFour,
            'title' : 'Sensibilidade na gengiva',
            'description':'Sensibilidade e inchaço nas gengivas ao redor do dente.' 
        },
        {
            'icon' : iconFive,
            'title' : 'Sensibilidade extrema',
            'description':'Sensibilidade extrema ao frio ou calor quando você bebe ou come' 
        }
    ]

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Sintomas"
                    title="Sinais e sintomas de que você precisa de tratamento de canal"
                    description="Conheça os principais sintomas que indicam a necessidade de tratamento endodôntico para preservar seu dente natural."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;
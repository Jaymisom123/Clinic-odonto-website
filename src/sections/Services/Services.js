import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Service from '../../components/Service/Service';
import ServicesData from './ServiceData';
import './Services.scss';


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <SectionTitle title="Nossas Especialidades Odontológicas em Catalão - GO" subTitle="Serviços"/>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <p className='service-title-text'>Criamos um ambiente onde o paciente se sente seguro, respeitado e amparado desde o primeiro contato. Cada detalhe é pensado para transmitir tranquilidade.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

            <div className="services-link text-center">
                <Link to='/'>
                    Ver todos os serviços
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;
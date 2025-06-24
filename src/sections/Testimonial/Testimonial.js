import React from 'react';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import './Testimonial.scss';

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Tânia Almeida',
            'description' : 'Tânia foi um caso complexo, paciente classe III, mas com a união de excelentes profissionais conseguimos devolver seu sorriso. Agradeço a confiança no nosso trabalho!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Adriete Cristina',
            'description' : 'Minha filha Alice foi muito bem cuidada pela Dra. Alba. Ambiente acolhedor e atendimento humanizado. Já agendamos o retorno em 6 meses!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Gleidy Anja',
            'description' : 'O tratamento do meu filho foi um sucesso! Mesmo sendo um pouco difícil no final, a equipe foi muito paciente e conseguimos com sucesso. Recomendo!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Paciente Satisfeito',
            'description' : 'Atendimento excepcional para crianças com necessidades especiais. Ambiente tranquilo e profissionais qualificados. Muito obrigado!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="DEPOIMENTOS"
                        title="O que nossos pacientes dizem sobre nós"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">Confira os depoimentos de nossos pacientes sobre a qualidade do atendimento e dos tratamentos na Ferreira Matos Odontologia.</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;
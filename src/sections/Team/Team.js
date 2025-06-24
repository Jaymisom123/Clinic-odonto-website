import React from 'react';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';
import imgFour from '../../assets/about/team/4.png';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Team.scss';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dra. Alba Carina Ferreira Viana',
            'specialty': 'CRO 17095-GO',
            'formation': 'Cirurgiã-Dentista pelo Centro Universitário do Triângulo Mineiro (2019). Especialista em Harmonização Orofacial pela HD Ensinos Odontológico (2021). Pós-graduanda em Ortodontia pela ABO Uberlândia.',
            'procedures': 'Clareamento, Limpeza/Raspagem, Extrações, Próteses Removíveis, Remoção de SISOS, Restaurações, Tratamento de Canal'
        },
        {
            'img': imgTwo,
            'name': 'Dra. Isabela Sousa Silva',
            'specialty': 'CRO 16738-GO',
            'formation': 'Cirurgiã-Dentista pela UNIUBE (2018). Especialista em Ortodontia pela FUNORTE (2022). Aperfeiçoamento em Cirurgia Oral Menor pela ABO (2020).',
            'procedures': 'Aparelhos Ortodônticos, Aparelhos Ortopédicos, Próteses Fixas, Limpeza/Raspagem, Restaurações'
        },
        {
            'img': imgThree,
            'name': 'Dr. Juliano Franco Rosa',
            'specialty': 'CRO 23428-GO / 50472-MG',
            'formation': 'Cirurgião-Dentista pelo Centro Universitário do Triângulo Mineiro (2017). Especialista em Implantodontia pela GAPI/FUNORTE (2019).',
            'procedures': 'Implantes, Próteses sobre Implantes, Protocolos, Próteses Totais (Dentaduras), Próteses Parciais'
        },
        {
            'img': imgFour,
            'name': 'Dra. Bruna Canedo Mesquita',
            'specialty': 'CRO 17095-GO',
            'formation': 'Cirurgiã-Dentista pela Universidade Brasil. Especialista em Endodontia pela Universidade Brasil. Pós-graduanda em Implantodontia pela ABO Uberlândia.',
            'procedures': 'Clareamento, Lentes e Facetas, Limpeza/Raspagem, Próteses Removíveis, Restaurações, Tratamento de Canal'
        }
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Equipe Especializada de Dentistas em Catalão - GO"
                            title="Conheça nossa equipe da Ferreira Matos Odontologia"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Entendemos que o tratamento começa no coração e se reflete no sorriso. Nossa missão vai além da técnica — é criar uma relação de confiança, empatia e cuidado verdadeiro.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <p>{team.specialty}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
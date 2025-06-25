import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BlogData from '../../sections/Blogs/BlogData';
import Footer from '../../sections/Footer/Footer';
import './SingleBlog.scss';

const SingleBlog = () => {

    const {url} = useParams();
    const blog = BlogData.find(blog => blog.url === url);
    const {title, img, category} = blog;

    return (
        <>
            <Navbar />
            <section className='section-bg pb-70 single-blog'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                                <main className="single-blog-area">
                                <p className="single-blog-category">
                                    {category}
                                </p>
                                <h2 className="single-blog-title">{title}</h2>
                                <img className='single-blog-banner' src={img} alt="blog banner"/>
                                <p className="single-blog-text">A odontologia moderna tem passado por uma revolução tecnológica sem precedentes. Novas tecnologias estão transformando a forma como os tratamentos dentários são realizados, proporcionando maior precisão, conforto e resultados mais eficazes para os pacientes.

                                Na Ferreira Matos Odontologia, estamos sempre atualizados com as mais recentes inovações do setor. Utilizamos equipamentos de última geração para diagnósticos mais precisos e tratamentos menos invasivos. Isso significa menos desconforto para o paciente e tempos de recuperação mais rápidos.</p>

                                <p className='single-blog-text'>A prevenção continua sendo a melhor medicina quando se trata de saúde bucal. Consultas regulares ao dentista, limpezas profissionais e cuidados domiciliares adequados são fundamentais para manter um sorriso saudável e bonito.

                                Em nossa clínica, acreditamos que cada paciente é único e merece um atendimento personalizado. Por isso, desenvolvemos planos de tratamento individualizados que atendem às necessidades específicas de cada pessoa, considerando não apenas a saúde bucal, mas também o bem-estar geral do paciente.</p>

                                <blockquote className='single-post-quote'>"O sorriso é a curva mais bonita do corpo humano. Na Ferreira Matos Odontologia, nosso compromisso é cuidar do seu sorriso com carinho, técnica e dedicação."</blockquote>

                                <p className="single-blog-text">Os avanços em implantodontia têm permitido devolver a função mastigatória e a estética do sorriso para pacientes que perderam dentes. Com técnicas modernas e materiais biocompatíveis, os implantes dentários se tornaram uma solução duradoura e natural.

                                Nosso especialista em implantodontia, Dr. Juliano Franco Rosa, utiliza as técnicas mais avançadas para garantir o sucesso dos procedimentos. Cada caso é cuidadosamente planejado utilizando tecnologia 3D para maior precisão e previsibilidade dos resultados.</p>
                            </main>
                        </div>
                        <div className="col-lg-3">
                            <div className="blog-sidebar">
                                <div className="sidebar-subscribe mb-5">
                                    <h3 className="sidebar-heading">Receba Nossas Atualizações</h3>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className='form-control' placeholder='Inscreva-se para receber novidades'/>
                                            <input className='btn btn-primary mt-1 w-100' type="button" value="Inscrever-se" />
                                        </div>
                                    </form>
                                </div>

                                <div className="sidebar-category mb-3">
                                    <h3 className="sidebar-heading">Categorias</h3>
                                    <ul>
                                        <li><Link to="/">Tecnologia</Link></li>
                                        <li><Link to="/">Tratamento de Canal</Link></li>
                                        <li><Link to="/">Implantes</Link></li>
                                        <li><Link to="/">Clareamento</Link></li>
                                        <li><Link to="/">Ortodontia</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default SingleBlog;
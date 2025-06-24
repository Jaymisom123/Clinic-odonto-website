import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import BlogData from './BlogData';
import './Blogs.scss';

const Blogs = () => {

    return (
        <section className='pt-100 pb-70 blog-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle
                    subTitle="Blog"
                    title="Mantenha-se atualizado com nossas últimas notícias"
                />

                <div className="row">
                    {
                        BlogData.map (blog => <BlogCard blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;
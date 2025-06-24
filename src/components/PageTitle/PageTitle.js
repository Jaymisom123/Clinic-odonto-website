import React from 'react';
import './PageTitle.scss';

const PageTitle = ({title,description}) => {
    return (
        <div className='page-title'>
            <div className="container">
                <h2>Notícias & Artigos</h2>
                <p>Mantenha-se atualizado com nosso blog e notícias mais recentes e obtenha dicas saudáveis para a saúde bucal</p>
            </div>
        </div> 
    );
};

export default PageTitle;
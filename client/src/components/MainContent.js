import React from 'react';

const MainContent = () => {
    return (
        <div className="main-content">
            <section className="recent-chapters">
                <h2>Capítulos Recientes</h2>
                <article>
                    <h3>Título del Post</h3>
                    <p>Publicado el 13 de junio de 2024</p>
                    <div className="img-container"><img src="/assets/Fondos/3.png" alt="Imagen del post"/></div>
                    <p>Este es un ejemplo de entrada de blog. Aquí puedes escribir el contenido de tu post.</p>
                </article>
                <article>
                    <h3>Título del Post</h3>
                    <p>Publicado el 13 de junio de 2024</p>
                    <div className="img-container"><img src="/assets/Fondos/3.png" alt="Imagen del post"/></div>
                    <p>Este es un ejemplo de entrada de blog. Aquí puedes escribir el contenido de tu post.</p>
                </article>
                <article>
                    <h3>Título del Post</h3>
                    <p>Publicado el 13 de junio de 2024</p>
                    <div className="img-container"><img src="/assets/Fondos/3.png" alt="Imagen del post"/></div>
                    <p>Este es un ejemplo de entrada de blog. Aquí puedes escribir el contenido de tu post.</p>
                </article>
            </section>
            <section className="recent-chapters">
                <h2>One shots</h2>
                <article>
                    <h3>Título del Post</h3>
                    <p>Publicado el 13 de junio de 2024</p>
                    <div className="img-container"><img src="/assets/Fondos/3.png" alt="Imagen del post"/></div>
                    <p>Este es un ejemplo de entrada de blog. Aquí puedes escribir el contenido de tu post.</p>
                </article>
            </section>
        </div>
    );
};

export default MainContent;

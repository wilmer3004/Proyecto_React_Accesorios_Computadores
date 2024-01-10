import React from 'react';
import Footer from "../footer/footer";
import Nav from "../Nav/Nav";
import Carrusel from "../carrusel/carrusel";

const LocalPage = () => {
    const menuItems = ["Inicio", "Productos", "Contacto"];

    const carruselItems = [
        {
            imageUrl: 'https://www.eltiempo.com/files/article_main_1200/uploads/2023/07/09/64ab2480e4b51.png',
            description: 'Imagen 1',
        },
        {
            imageUrl: 'https://img.freepik.com/fotos-premium/teclado-portatil-escribiendo-primer-plano-trabajador-escritorio-oficina-empleado-negocios-leyendo-correos-electronicos-computadora-empresa-corporativa-mujer-que-trabaja-tecnologia-digital-inalambrica-usar-internet_590464-76528.jpg',
            description: 'Imagen 2',
        },
    ];

    return (
        <div>
            <Nav items={menuItems} />
            <Carrusel items={carruselItems} />
            <div className={"informacion"}>



                <div className={"data-importante"}>
                    Información Relevante a nuestra página
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

LocalPage.propTypes = {};

LocalPage.defaultProps = {};

export default LocalPage;

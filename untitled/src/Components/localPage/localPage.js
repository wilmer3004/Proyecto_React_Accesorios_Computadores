import React from 'react';
import Footer from "../footer/footer";
import Nav from "../Nav/Nav";
import Carrusel from "../carrusel/carrusel";
import "./LocalPage.css";

const LocalPage = () => {
    const menuItems = ["Productos", "Contacto","Login"];

    const carruselItems = [
        {
            imageUrl: 'https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como_elegir_un_teclado.jpg',
            description: 'Teclados',
        },
        {
            imageUrl: 'https://cdn.eraspace.com/pub/media/mageplaza/blog/post/m/e/memilihmousegaming.jpg',
            description: 'Mouses',
        },
        {
            imageUrl: 'https://pbs.twimg.com/media/EtezppZXMAcAZFF.jpg',
            description: 'Pantallas',
        },
    ];

    return (
        <div className={"local-page"}>
            <div className={"contenedor"}>
                <Nav items={menuItems}/>
                <Carrusel items={carruselItems}/>
                <div className={"informacion"}>
                    <div className={"data-importante"}>
                        <h2>Bienvenido a nuestra tienda de Accesorios de Computadoras</h2>
                        <p>
                            Descubre una amplia variedad de accesorios de alta calidad para mejorar tu experiencia con la
                            tecnología.
                            Desde teclados y ratones ergonómicos hasta potentes tarjetas gráficas y dispositivos de
                            almacenamiento,
                            tenemos todo lo que necesitas para potenciar tu computadora.
                        </p>
                        <p>
                            Navega por nuestra selección de productos, encuentra las últimas novedades y accede a
                            promociones exclusivas.
                            Estamos comprometidos a brindarte los mejores productos y un servicio excepcional.
                        </p>
                        <p>
                            ¡Haz que tu espacio de trabajo sea más eficiente y atractivo con nuestros accesorios de última
                            generación!
                        </p>
                    </div>

                </div>
                <div className={"informacion"}>
                    <div className={"data-importante"}>
                        <h2>Bienvenido a nuestra tienda de Accesorios de Computadoras</h2>
                        <p>
                            Descubre una amplia variedad de accesorios de alta calidad para mejorar tu experiencia con la
                            tecnología.
                            Desde teclados y ratones ergonómicos hasta potentes tarjetas gráficas y dispositivos de
                            almacenamiento,
                            tenemos todo lo que necesitas para potenciar tu computadora.
                        </p>
                        <p>
                            Navega por nuestra selección de productos, encuentra las últimas novedades y accede a
                            promociones exclusivas.
                            Estamos comprometidos a brindarte los mejores productos y un servicio excepcional.
                        </p>
                        <p>
                            ¡Haz que tu espacio de trabajo sea más eficiente y atractivo con nuestros accesorios de última
                            generación!
                        </p>
                    </div>

                </div>
                <div className={"informacion"}>
                    <div className={"data-importante"}>
                        <h2>Bienvenido a nuestra tienda de Accesorios de Computadoras</h2>
                        <p>
                            Descubre una amplia variedad de accesorios de alta calidad para mejorar tu experiencia con la
                            tecnología.
                            Desde teclados y ratones ergonómicos hasta potentes tarjetas gráficas y dispositivos de
                            almacenamiento,
                            tenemos todo lo que necesitas para potenciar tu computadora.
                        </p>
                        <p>
                            Navega por nuestra selección de productos, encuentra las últimas novedades y accede a
                            promociones exclusivas.
                            Estamos comprometidos a brindarte los mejores productos y un servicio excepcional.
                        </p>
                        <p>
                            ¡Haz que tu espacio de trabajo sea más eficiente y atractivo con nuestros accesorios de última
                            generación!
                        </p>
                    </div>

                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>

        </div>
    );
};

LocalPage.propTypes = {};

LocalPage.defaultProps = {};

export default LocalPage;

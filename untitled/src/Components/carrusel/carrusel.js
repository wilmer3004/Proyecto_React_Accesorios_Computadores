// Carrusel.js

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.css";

const Carrusel = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="contenedor-carrusel">
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className="carrusel-item">
                        <img src={item.imageUrl} alt={`Imagen ${index}`} />
                        <p>{item.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carrusel;

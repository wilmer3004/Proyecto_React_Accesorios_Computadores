import React, { useState } from "react";
import "./Cards.css";

const Cards = ({ items }) => {
    const itemsPerPage = 22;
    const [currentPage, setCurrentPage] = useState(1);

    if (!Array.isArray(items) || items.length === 0) {
        return <p>No hay productos disponibles.</p>;
    }

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className={"contenedor-cards"}>
            <div className={"contenedor-card"}>
                {currentItems.map((item, index) => (
                    <div key={index} className={"card-item"}>
                        <p className={"name-product"}>{item.nombreProducto}</p>
                        <img src={item.imagenUrl} alt={`Imagen ${index}`} />
                        <p>{item.descripcion}</p>
                        <p className={"precio"}>$ {item.precio} cop</p>
                    </div>
                ))}
            </div>
            {totalPages > 1 && (
                <div className={"pagination"}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={currentPage === page ? "active" : ""}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cards;

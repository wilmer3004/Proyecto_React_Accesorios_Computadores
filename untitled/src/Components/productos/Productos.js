import React, {useState} from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";
import Cards from "../cards/Cards";
import "./Productos.css"

const Productos = ()=>{
    const menuItems = ["Registrar","Inicio"];
    const dataProductos = [
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },

        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },
        {
            nombreProducto:"Mouse",
            imagenUrl:"https://www.apcomputadores.com/wp-content/uploads/2021/05/Sin-titulo-2-42.jpg",
            descripcion:"GAMER LOGITECH PRO ALÁMBRICO   ",
            precio:"226,990"
        },

    ];

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = dataProductos.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const currentData = dataProductos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
        <div className={"contenedorproductos"}>
            <div className={"contenedorp"}>
                <Nav items={menuItems} />
                <div>
                    <h1>Productos</h1>
                </div>
                <Cards items={currentData} />
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
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
};

export default Productos;
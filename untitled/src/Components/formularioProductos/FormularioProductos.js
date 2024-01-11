import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./FormularioProductos.css";

const FormularioProductos = () => {
    const menuItems = ["Inicio"];

    const [nameAccesorio, setNameAccesorio] = useState("");
    const [descripAccesorio, setDescripAccesorio] = useState("");
    const [cantidadDispAccesorio, setCantidadDispAccesorio] = useState("");
    const [precioComprAccesorio, setPrecioComprAccesorio] = useState("");
    const [precioVentAccesorio, setPrecioVentAccesorio] = useState("");
    const [estadoAccesorio, setEstadoAccesorio] = useState(true);
    const [tipoAccesorio, setTipoAccesorio] = useState(1); // Valor por defecto (puede ser un número)
    const [nitProveedor, setNitProveedor] = useState("");
    const [marcaAccesorio, setMarcaAccesorio] = useState(1); // Valor por defecto (puede ser un número)

    const tiposAccesorios = [
        { id: 1, nombre: "Teclado" },
        { id: 2, nombre: "Mouse" },
        // Agrega más tipos según tus necesidades
    ];

    const marcasAccesorios = [
        { id: 1, nombre: "Logitech" },
        { id: 2, nombre: "HP" },
        // Agrega más marcas según tus necesidades
    ];

    const handleNameAccesorio = (event) => {
        setNameAccesorio(event.target.value);
    };

    const handleDescripAccesorio = (event) => {
        setDescripAccesorio(event.target.value);
    };

    const handleCantidadDispAccesorio = (event) => {
        setCantidadDispAccesorio(event.target.value);
    };

    const handlePrecioComprAccesorio = (event) => {
        setPrecioComprAccesorio(event.target.value);
    };

    const handlePrecioVentAccesorio = (event) => {
        setPrecioVentAccesorio(event.target.value);
    };

    const handleEstadoAccesorio = (event) => {
        setEstadoAccesorio(event.target.checked);
    };

    const handleTipoAccesorio = (event) => {
        setTipoAccesorio(Number(event.target.value));
    };

    const handleNitProveedor = (event) => {
        setNitProveedor(event.target.value);
    };

    const handleMarcaAccesorio = (event) => {
        setMarcaAccesorio(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Formulario enviado", {
            nameAccesorio,
            descripAccesorio,
            cantidadDispAccesorio,
            precioComprAccesorio,
            precioVentAccesorio,
            estadoAccesorio,
            tipoAccesorio,
            nitProveedor,
            marcaAccesorio,
        });
    };


    return (
        <div className={"contenedor-form"}>
            <div className={"contenedor-form-poducto"}>

                <Nav items={menuItems} />

                <div className={"form-product"}>
                    <h1>Registrar Accesorio</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Nombre del Accesorio:
                            <input type="text" value={nameAccesorio} onChange={handleNameAccesorio}/>
                        </label>
                        <label>
                            Descripción del Accesorio:
                            <textarea value={descripAccesorio} onChange={handleDescripAccesorio}/>
                        </label>
                        <label>
                            Cantidad Disponible:
                            <input type="number" value={cantidadDispAccesorio} onChange={handleCantidadDispAccesorio}/>
                        </label>
                        <label>
                            Precio de Compra:
                            <input type="number" value={precioComprAccesorio} onChange={handlePrecioComprAccesorio}/>
                        </label>
                        <label>
                            Precio de Venta:
                            <input type="number" value={precioVentAccesorio} onChange={handlePrecioVentAccesorio}/>
                        </label>
                        <label>
                            Estado del Accesorio:
                            <input type="checkbox" checked={estadoAccesorio} onChange={handleEstadoAccesorio}/>
                        </label>
                        <label>
                            Tipo de Accesorio:
                            <select value={tipoAccesorio} onChange={handleTipoAccesorio}>
                                {tiposAccesorios.map((tipo) => (
                                    <option key={tipo.id} value={tipo.id}>
                                        {tipo.nombre}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label>
                            NIT del Proveedor:
                            <input type="text" value={nitProveedor} onChange={handleNitProveedor}/>
                        </label>
                        <label>
                            Marca del Accesorio:
                            <select value={marcaAccesorio} onChange={handleMarcaAccesorio}>
                                {marcasAccesorios.map((marca) => (
                                    <option key={marca.id} value={marca.id}>
                                        {marca.nombre}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <input type="submit" value={"Enviar"} onChange={handleSubmit}/>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioProductos;

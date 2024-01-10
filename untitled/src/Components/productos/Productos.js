import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../footer/footer";

const Productos = ()=>{
    const menuItems = ["Registrar", "Contacto","Inicio"];
    return (
        <div>
            <Nav items={menuItems}/>
            <div>hola buenas</div>
            <Footer/>
        </div>
    );
};
export default Productos;


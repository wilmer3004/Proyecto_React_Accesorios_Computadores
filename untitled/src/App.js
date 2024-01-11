import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LocalPage from "./Components/localPage/localPage";
import Login from "./Components/login/login";
import FormularioProductos from "./Components/formularioProductos/FormularioProductos";
import Productos from "./Components/productos/Productos";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LocalPage />} />
                <Route path="/inicio" element={<LocalPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrar" element={<FormularioProductos />} />
                <Route path="/productos" element={<Productos />} />
            </Routes>
        </Router>
    );
}

export default App;
import React from "react";
import "./Nav.css"

const Nav = ({ items }) => {
    return (
        <nav>
            <div className={"title"}>
                <h1>Accesorios de computadores</h1>
            </div>
            <div className={"botones"}>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            <button>{item}</button>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
};

export default Nav;
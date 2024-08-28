//  import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/header.css";
// import "./header.js";
import logo from '../../assets/images/Ebenezer.svg';


export const Header = () => {
    const myStyle = {
        marginLeft: '90px',
        width:'100px',
        height:'90px'
      };
    return (     
        <nav className="navbar">
            <img src={logo} style={myStyle}/>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                <div className="menu">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="dropdown-sub">
                    <a href="#">Nosotros</a>                        

                        <ul className="dropdown">
                            <li><Link to="/peoples">Pastores</Link></li>
                            <li><Link to="/history">Historia de la Iglesia</Link></li>
                            <li><Link to="/believe">Que Creemos</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown-sub">
                        <a href="/">Ministerios</a>

                        <ul className="dropdown">
                            <li><Link to="/groups">Grupos Pequeños</Link></li>
                            <li><Link to="/women">Mujeres</Link></li>
                            <li><Link to="/men">Hombres</Link></li>
                            <li><Link to="/rangers">Niños/Royal Rangers</Link></li>
                            <li><Link to="/misions">Misiones</Link></li>
                            <li><Link to="/atalayas">Atalayas</Link></li>
                        </ul>

                    </li>

                    <li><Link to="/events">Eventos</Link></li>
                    <li><Link to="/sermons">Sermones</Link></li>
                </div>
            </ul>
        </nav>
    )
}
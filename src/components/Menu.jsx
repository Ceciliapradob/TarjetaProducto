// src/components/Menu.jsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // FontAwesome
import "./menu.css"; // Archivo CSS

const Menu = () => {
  return (
    <header className="menu">
      {/* Nombre de la marca a la izquierda */}
      <div className="menu-logo">Logo</div>

      {/* Enlaces de navegación al centro */}
      <nav className="menu-nav">
        <a href="#" className="menu-link">Inicio</a>
        <a href="#" className="menu-link">Productos</a>
        <a href="#" className="menu-link">Contacto</a>
      </nav>

      {/* Iconos de carrito y login a la derecha */}
      <div className="menu-icons">
        <i className="fas fa-shopping-cart menu-icon"></i>
        <i className="fas fa-user menu-icon"></i>
      </div>
    </header>
  );
};

export default Menu;

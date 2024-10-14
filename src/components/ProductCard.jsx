// src/components/ProductCard.jsx
import React, { useState } from "react";
import RemeraNegra from '../assets/remeraNegra.png'; 
import "./productCard.css"; 
import RemeraAmarilla from '../assets/remeraAmarilla.png'; 
import RemeraAzul from '../assets/remeraAzul.png'; 
import RemeraRoja from '../assets/remeraRoja.png'; 
import RemeraVerde from '../assets/remeraVerde.png'; 

const ProductCard = () => {
  // Estado para manejar la imagen seleccionada, la cantidad y el color seleccionado
  const [selectedImage, setSelectedImage] = useState(RemeraNegra); // Imagen inicial
  const [quantity, setQuantity] = useState(1); // Cantidad inicial
  const [selectedColor, setSelectedColor] = useState("Negra"); // Color inicial

  // Imágenes del producto
  const productImages = {
    Negra: RemeraNegra,
    Amarilla: RemeraAmarilla,
    Azul: RemeraAzul,
    Roja: RemeraRoja,
    Verde: RemeraVerde
  };

  // Función para manejar el cambio de imagen por color
  const handleColorClick = (color) => {
    setSelectedColor(color); // Actualiza el color seleccionado
    setSelectedImage(productImages[color]); // Cambia la imagen según el color seleccionado
  };

  // Función para aumentar la cantidad
  const incrementQuantity = () => {
    setQuantity(quantity + 1); // Aumenta la cantidad en 1
  };

  // Función para disminuir la cantidad
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Disminuye la cantidad en 1 si es mayor a 1
    }
  };

  // Función para manejar la adición al carrito
  const handleAddToCart = () => {
    alert(`Agregaste ${quantity} unidades al carrito de color ${selectedColor}`); // Muestra un mensaje
  };

  return (
    <section className="productCardPadre">
      <div className="product-card">
        <div className="product-images">
          {/* Imágenes del producto en columna */}
          {Object.keys(productImages).map((color, index) => (
            <img
              key={index}
              src={productImages[color]}
              alt={`Producto ${color}`}
              className="product-thumbnail"
              onClick={() => handleColorClick(color)} // Cambia la imagen seleccionada al hacer clic en el color
            />
          ))}
        </div>

        {/* Imagen grande del producto */}
        <img src={selectedImage} alt="Producto seleccionado" className="product-image" />

        <div className="product-details">
          <h2 className="product-title">Remeras de Hombre</h2>
          <p className="product-price"><strong>$49.99</strong></p>

          {/* Opciones de color */}
          <div className="product-color">
            <span>Color:</span>
            <div className="color-options">
              <div className="color-option" style={{ backgroundColor: "black" }} onClick={() => handleColorClick("Negra")}></div>
              <div className="color-option" style={{ backgroundColor: "yellow" }} onClick={() => handleColorClick("Amarilla")}></div>
              <div className="color-option" style={{ backgroundColor: "blue" }} onClick={() => handleColorClick("Azul")}></div>
              <div className="color-option" style={{ backgroundColor: "red" }} onClick={() => handleColorClick("Roja")}></div>
              <div className="color-option" style={{ backgroundColor: "green" }} onClick={() => handleColorClick("Verde")}></div>
            </div>
          </div>

          {/* Opciones de talla */}
          <div className="product-size">
            <span>Talle:</span>
            <div className="size-options">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="size-option">{size}</div>
              ))}
            </div>
          </div>

          {/* Descripción del producto */}
          <p className="product-description">Remeras elegantes para hombre, perfectas para cualquier ocasión.</p>

          {/* Información de envío */}
          <p className="product-shipping"><strong style={{ color: "red" }}>Envío gratis</strong></p>

          {/* Controles de cantidad */}
          <div className="quantity-controls">
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
          </div>

          {/* Botón para agregar al carrito */}
          <button className="add-to-cart" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;

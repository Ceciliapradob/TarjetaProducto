// src/App.jsx
import React from "react";
import Menu from "./components/Menu";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      {/* Menú de navegación */}
      <Menu />
      {/* Contenido principal de la página */}
      <main>

        <ProductCard />
        {/* Aquí estará el resto del contenido */}
      </main>
    </div>
  );
};

export default App;

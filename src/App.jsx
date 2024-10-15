// src/App.jsx
import React from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <div>
      {/* Menú de navegación */}

      {/* Contenido principal de la página */}
      <main>

        <ProductCard />
        {/* Aquí estará el resto del contenido */}
      </main>
    </div>
  );
};

export default App;

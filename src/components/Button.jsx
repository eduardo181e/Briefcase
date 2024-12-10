import React from 'react';
import '../styles/button.css'; // Estilos CSS para el botón

function Button1({ text, link }) {
  const handleClick = () => {
    window.location.href = link; // Redirecciona al enlace pasado como prop
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button1;
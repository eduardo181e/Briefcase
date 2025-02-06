import React from 'react';
import '../styles/button.css'; // Estilos CSS para el botón
import { useNavigate } from 'react-router-dom';
function Button({ text, link, out }) {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
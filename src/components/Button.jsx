import React from 'react';
import '../styles/button.css'; // Estilos CSS para el botón
import { useNavigate } from 'react-router-dom';
function Button1({ text, link, out }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(link)
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button1;
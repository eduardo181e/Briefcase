import React, { useEffect, useState } from 'react';
import '../styles/videoPlayer.css'; // Asegúrate de agregar el archivo CSS
import vieoFile from "../../public/videos/caja/crepaDulce/crepaDulce_es.mp4"
import vieoFile1 from "../../public/videos/caja/editIngCarr/eliminarIngCarrito_es.mp4"
import vieoFile2 from "../../public/videos/caja/imprimirOrden/imprimirOrden_es.mp4"
import vieoFile3 from "../../public/videos/caja/crepaDulceEdit/crepaDulceEdit_es.mp4"

const aspectRatio = 1500 / 690
const VideoPlayer1 = () => {
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      const updateSize = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth < 565) {
          setWidth(screenWidth * 0.85);
        } else  if (screenWidth < 1257) {
          setWidth(500);
        } else {
          setWidth(screenWidth * 0.50); // 90% del ancho de la pantalla en móviles
        }
      };
  
      updateSize(); // Llamamos una vez al inicio
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
  const height = width / aspectRatio
  // Definir una lista de URLs de los videos que se van a reproducir
  const videoList = [  
    vieoFile,
    vieoFile1,
    vieoFile2,
    vieoFile3,
  ];

  // Estado para saber qué video está siendo reproducido
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [fade, setFade] = useState(false); // Estado para manejar el desvanecimiento

  // Función que se llama cuando un video termina de reproducirse
  const handleVideoEnd = () => {
    if (currentVideoIndex < videoList.length - 1) {
      setFade(true);
      setTimeout(() => {
        setCurrentVideoIndex(currentVideoIndex + 1);
        setFade(false);
      }, 500); // El tiempo de desvanecimiento (500ms)
    } else {
      setFade(true);
      setTimeout(() => {
        setCurrentVideoIndex(0); // Volver al primer video si se terminó la lista
        setFade(false);
      }, 500);
    }
  };

  // Funciones para cambiar el video manualmente
  const goToNextVideo = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length);
      setFade(false);
    }, 500); // El tiempo de desvanecimiento
  };

  const goToPreviousVideo = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentVideoIndex((prevIndex) =>
        prevIndex === 0 ? videoList.length - 1 : prevIndex - 1
      );
      setFade(false);
    }, 500); // El tiempo de desvanecimiento
  };

  return (
    <div className="video-container">
      <div className={`video-wrapper ${fade ? 'fade' : ''}`}>
        <video
          width={width}
          height={height}
          autoPlay
          muted  
          onEnded={handleVideoEnd}
          key={currentVideoIndex} // Cambiar el video cuando el índice cambie
        >
          <source src={videoList[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="controls">
        <button className="custom-button" onClick={goToPreviousVideo}>{"<"}</button>
        <button className="custom-button" onClick={goToNextVideo}>{">"}</button>
      </div>
    </div>
  );
};

export default VideoPlayer1;

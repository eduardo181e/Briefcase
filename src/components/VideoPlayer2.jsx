import React, { useState } from 'react';
import '../styles/videoPlayer.css'; // Asegúrate de agregar el archivo CSS

import vieoFile2 from "../../public/videos/Reflex_es/createCombo_es.mp4"
import vieoFile3 from "../../public/videos/Reflex_es/custom_es.mp4"
import vieoFile1 from "../../public/videos/Reflex_es/editCombo_es.mp4"
const VideoPlayer2 = () => {
  const aspectRatio = 908 / 1826
  const width = 300
  const height = width / aspectRatio
  // Definir una lista de URLs de los videos que se van a reproducir
  const videoList = [  
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

export default VideoPlayer2;

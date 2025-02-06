import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/Reflex_es/createCombo_es.mp4"
import vieoFile1 from "../../public/videos/Reflex_es/editCombo_es.mp4"
import vieoFile2 from "../../public/videos/Reflex_es/copyCombo_es.mp4"
import vieoFile3 from "../../public/videos/Reflex_es/deleteCombo_es.mp4"
import vieoFile4 from "../../public/videos/Reflex_es/custom_es.mp4"
import vieoFile5 from "../../public/videos/Reflex_es/settings_es.mp4"

const aspectRatio = 908 / 1826
const Reflexs = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
      if (currentIndex < videos.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedVideo(videos[currentIndex + 1]);
      }
    };
    
    const handlePrev = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setSelectedVideo(videos[currentIndex - 1]);
      }
    };
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
      const updateSize = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth < 520) {
          setWidth(screenWidth * 0.5);
        } else if (screenWidth < 700) {
          setWidth(screenWidth * 0.4);
        } else if (screenWidth < 1027) {
          setWidth(screenWidth * 0.25);
        } else if (screenWidth < 1257) {
          setWidth(screenWidth * 0.25);
        } else {
          setWidth(screenWidth * 0.20);
        }
      };
  
      updateSize(); // Llamamos una vez al inicio
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    function cerrarNav(){
      const element = document.querySelector(".lateralNav1")
      element.classList.remove("lateral-activo")
      element.classList.add("lateral-desactivado")
    }
  const videos = [
    { id: 1, title: 'Crear y reproducir combo', videoUrl: vieoFile, instructions: `Para crear un nuevo combo de boxeo ve desde menu principal a boxeo despues presiona el icono de mas y te aparecera la vista para crear un nuevo combo<br/>. click para ver (0:00)<br/><br/>Para agregar un nuevo golpe al combo haz click en el golpe que quieres agregar y te aparecera un submenu para que ingreses lo que quieres que se tarde el golpe en escucharse y lo que quieres que dure el sonido estos son sonidos pregrabados que aceleran el audio dependiendo de cuanto quieres que dure el sonido de durar lo que tu le indiquez <br/>. click para ver (0:03)<br/><br/>Si haces click en un elemento de la convinacion podras acceder al submenu otra vez para modificar lo que quieres que dure y lo que quieres que tarde en reproducirce<br/>. click para ver (0:37)<br/><br/>Si quieres modificar el orden de la convinacion deja precionado el golpe que quieres mover y muevelo a la posicion en la que quieres que este para organizar la convinacion a tu gusto<br/>. click para ver (0:45)<br/><br/>Despues de organizar tu convinacion se le da un nombre de tu preferencia para diferenciarlo de los demas haci como indicar las veces que quieres que se reputa el ciclo y y el tiempo que tardara en aparecer cada ciclo<br/>. click para ver (0:55)<br/><br/>Una vez tengas tu coninacion lista la puedes reproducir al momento de guardarla o solo guardarla para reproducirla despues eso es de tu eleccion<br/>. click para ver (1:02)<br/><br/>Puedes reprducir tu combo ya sea cuando termines de crearlo en save and play o solo guardandolo y despues seleccionarlo para reproducirlo de entre todos los combos<br/>. click para ver (1:10)<br/><br/>Al reproducir el combo te da la opcion de pausar el combo que puedes pausar los ciclos cuando tu quieras y haci como tambien reiniciar los ciclos para reproducir todo desde el principio<br/>. click para ver (1:15)` },
    { id: 2, title: 'Editar combo', videoUrl: vieoFile1, instructions: `Para editar un combo accede desde el memu principal a boxeo y despues selecciona el combo que ya guardaste y dale click al icono de editar azul esto te mandara a una vista donde podras editar tu combo las opciones son las mismas que cuando creas tu combo solo aqui tienes la opcion de editarlo<br/>. click para ver (0:00)` },
    { id: 3, title: 'Copiar combo', videoUrl: vieoFile2, instructions: `Si quieres crear un combo a partir de uno que ya tienes echo puedes copiar cualquier combo dando click al icono de copiar en las opciones de el combo, una vez agas click te aparecera un submenu para que selecciones un nombre para la copia y a partir de hay puedes conservar el combo original como lo tienes y el nuevo modificarlo a tu gusto ya sea para agregarle mas dificultar o reducirla a tu gusto<br/>. click para ver (0:02)<br/><br/>` },
    { id: 4, title: 'Delete Combo', videoUrl: vieoFile3, instructions: `Para eliminar un combo en las opciones de los combos haz click en el icono de eliminar y se eliminara el combo<br/>. click para ver (0:02)` },
    { id: 5, title: 'Custom', videoUrl: vieoFile4, instructions: `Para acceder a los combos personalizados desde el menu haz click en la opcion de personalizado y accederas a la opcion de personalizado<br/>. click para ver (0:00)<br/><br/>En esta opciion es practicamente lo mismo que en la opcion de boxeo solo que aqui te permite grabar tus propios sonidos para tener un estimulo auditivo personalizado de modo que mas que solo tener golpes de boxeo puedes tener golpes de kickboxing o movimientos por ejemplo de mma avisandote de un derribo para hacer un sprawl o cualquier otro movimiento de cualquier otro arte marcial<br/>. click para ver (0:02)<br/><br/>` },
    { id: 6, title: 'Configuracion', videoUrl: vieoFile5, instructions: `En las configuraciones de la aplicacion puedes modificar el idioma y el tema de la aplicacion dependiendo de cual sea tu preferencia<br/>. click para ver (0:00)<br/><br/>` },
  ];
  const height = width / aspectRatio
  // Estado para el video seleccionado
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  
  const parseInstructions = (instructions) => {
    return instructions.replace(/click para ver \((\d+):(\d+)\)/g, (match, minutes, seconds) => {
      const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
      return `<button onclick="document.querySelector('video').currentTime=${totalSeconds}; window.scrollTo({ top: 0, behavior: 'smooth' });" 
        style='color: blue; background: none; border: none; cursor: pointer;'>
        🔵 Ver (${minutes}:${seconds})
      </button>`;
    });
  };

  return (
    <div style={{ display: 'flex' }}>
    <ParticlesComponent id="particles"></ParticlesComponent>
      {/* Lista de videos */}
      <ul className="staticNav1">
        {videos.map((video) => (
          <li key={video.id}>
                <button className="custom-button" 
                
                style={{
                  backgroundColor: selectedVideo?.id === video.id ? 'gray' : undefined,
                }}
                onClick={() => {
                  console.warn(video.id-1);
                  setCurrentIndex(video.id-1)
                  setSelectedVideo(video)
                }}>
                {video.title}
                </button>
          </li>
        ))}
      </ul>
      <div style={{zIndex: '9'}} onClick={() => {
          const element = document.querySelector(".lateralNav1")
          element.classList.remove("lateral-desactivado")
          element.classList.add("lateral-activo")
          
        }} className="iconNav1"><ion-icon name="menu-outline"></ion-icon></div>  
    <div className="lateralNav12">
    <nav className="lateralNav1">
      <ul>
        <li onClick={() => {
cerrarNav()
        }}><ion-icon name="menu-outline"></ion-icon> </li>
                {videos.map((video) => (
          <li key={(video.id+'r')}>
                <button className="custom-button" 
                style={{
                  backgroundColor: selectedVideo?.id === video.id ? '#f9f9f9' : undefined,
                  color: selectedVideo?.id === video.id ? 'black' : undefined,
                }}
                onClick={() => {setSelectedVideo(video)
                  cerrarNav()
                  document.querySelector('video').currentTime='0:00'
                }}>
                {video.title}
                </button>
          </li>
        ))}
      </ul>
    </nav>        
    </div>

      {/* Contenido dinámico */}
      <div className="video1">
        {selectedVideo ? (
          <>
            <h2>{selectedVideo.title}</h2>
            <video ref={videoRef} src={selectedVideo.videoUrl} autoPlay muted loop controls style={{ width: width, height: height }} />
            <p dangerouslySetInnerHTML={{ __html: parseInstructions(selectedVideo.instructions) }}></p>
            <div>
            <button onClick={handlePrev} disabled={currentIndex === 0}>Anterior</button>
            <button onClick={handleNext} disabled={currentIndex === videos.length - 1}>Siguiente</button>
            </div>
          </>
        ) : (
          <>
          <h2>{videos[0].title}</h2>
          <video ref={videoRef} src={videos[0].videoUrl} autoPlay muted loop controls style={{ width: width, height: height }} />
          <p dangerouslySetInnerHTML={{ __html: parseInstructions(videos[0].instructions) }}></p>
          <button onClick={handlePrev} disabled={currentIndex === 0}>Anterior</button>
          <button onClick={handleNext} disabled={currentIndex === videos.length - 1}>Siguiente</button>
        </>
        )}
      </div>
    </div>
  );
};

export default Reflexs;

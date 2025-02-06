import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/Reflex_en/createCombo_en.mp4"
import vieoFile1 from "../../public/videos/Reflex_en/editCombo_en.mp4"
import vieoFile2 from "../../public/videos/Reflex_en/copyCombo_en.mp4"
import vieoFile3 from "../../public/videos/Reflex_en/deleteCombo_en.mp4"
import vieoFile4 from "../../public/videos/Reflex_en/custom_en.mp4"
import vieoFile5 from "../../public/videos/Reflex_en/settings_en.mp4"

const aspectRatio = 908 / 1826
const ReflexsEn = () => {
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
  const videos = 
    [
      {
        id: 1,
        title: "Create and Play Combo",
        videoUrl: vieoFile,
        instructions: `To create a new boxing combo, go from the main menu to boxing, then press the plus icon, and the view to create a new combo will appear.<br/>. click para ver (0:00)<br/><br/>
        To add a new punch to the combo, click on the punch you want to add, and a submenu will appear where you can enter the delay before the punch is heard and how long the sound lasts. These are pre-recorded sounds that speed up depending on how long you set the sound to last.<br/>. click para ver (0:02)<br/><br/>
        If you click on an element of the combination, you can access the submenu again to modify the duration and delay before playback.<br/>. click para ver (0:25)<br/><br/>
        To modify the order of the combination, press and hold the punch you want to move and drag it to the desired position to organize the combination as you prefer.<br/>. click para ver (0:31)<br/><br/>
        After organizing your combination, you can name it to differentiate it from others, as well as specify the number of cycles you want and the time interval between cycles.<br/>. click para ver (0:36)<br/><br/>
        Once your combination is ready, you can either play it immediately upon saving or just save it to play later—it's your choice.<br/>. click para ver (0:45)<br/><br/>
        You can play your combo either right after creating it using "Save and Play" or by saving it and later selecting it from your list of combos.<br/>. click para ver (0:51)<br/><br/>
        When playing the combo, you have the option to pause cycles whenever you want, as well as restart them to play everything from the beginning.<br/>. click para ver (0:59)`
      },
      {
        id: 2,
        title: "Edit Combo",
        videoUrl: vieoFile1,
        instructions: `To edit a combo, go from the main menu to boxing, select the combo you saved, and click the blue edit icon. This will take you to a view where you can edit your combo. The options are the same as when creating a combo, except here you can modify an existing one.<br/>. click para ver (0:00)`
      },
      {
        id: 3,
        title: "Copy Combo",
        videoUrl: vieoFile2,
        instructions: `If you want to create a combo based on an existing one, you can copy any combo by clicking the copy icon in the combo options. Once you click, a submenu will appear where you can select a name for the copy. From there, you can keep the original combo as it is and modify the new one as you like, either to increase or decrease the difficulty.<br/>. click para ver (0:00)<br/><br/>`
      },
      {
        id: 4,
        title: "Delete Combo",
        videoUrl: vieoFile3,
        instructions: `To delete a combo, go to the combo options, click the delete icon, and the combo will be removed.<br/>. click para ver (0:02)`
      },
      {
        id: 5,
        title: "Custom",
        videoUrl: vieoFile4,
        instructions: `To access custom combos from the menu, click on the "Custom" option.<br/>. click para ver (0:00)<br/><br/>
        This option is very similar to the boxing section, except that here you can record your own sounds for a personalized auditory stimulus. This means that instead of just having boxing punches, you can include kickboxing strikes or movements from MMA, such as takedown alerts for performing a sprawl or any other move from any martial art.<br/>. click para ver (0:02)<br/><br/>`
      },
      {
        id: 6,
        title: "Settings",
        videoUrl: vieoFile5,
        instructions: `In the application settings, you can change the language and theme of the app according to your preference.<br/>. click para ver (0:00)<br/><br/>`
      }
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
          🔵 View (${minutes}:${seconds})
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

export default ReflexsEn;

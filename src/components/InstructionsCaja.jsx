import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/caja/crepaDulce/crepaDulce_en.mp4"
import vieoFile1 from "../../public/videos/caja/crepaDulceEdit/crepaDulceEdit_en.mp4"
import vieoFile2 from "../../public/videos/caja/bebidas/bebidas_en.mp4"
import vieoFile3 from "../../public/videos/caja/editBebida/editBebida_en.mp4"
import vieoFile4 from "../../public/videos/caja/deleteBebida/deleteBebida_en.mp4"
import vieoFile5 from "../../public/videos/caja/editIngCarr/eliminarIngCarrito_en.mp4"
import vieoFile6 from "../../public/videos/caja/funcionStock/funcionCheackStock_en.mp4"
import vieoFile7 from "../../public/videos/caja/imprimirOrden/imprimirOrden_en.mp4"
import vieoFile8 from "../../public/videos/caja/configuracion/configuracion_en.mp4"
import vieoFile9 from "../../public/videos/caja/login/login_en.mp4"

const aspectRatio = 1500 / 690
const AdminCajaEn = () => {
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
  
        if (screenWidth < 565) {
          setWidth(screenWidth * 0.75);
        } else if (screenWidth < 1027) {
          setWidth(500);
        } else if (screenWidth < 1257) {
          setWidth(600);
        } else {
          setWidth(screenWidth * 0.58); // 90% del ancho de la pantalla en móviles
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
    { id: 1, title: 'Log In', videoUrl: vieoFile9, instructions: `To log in to the application for selling, from the navigation bar click on "Log In" or if you haven't logged in, the application will always send you to that component. Then, enter the user details provided by the administrator, which will be your username and password.<br/>. click para ver (0:00)` },
    { id: 2, title: 'Settings', videoUrl: vieoFile8, instructions: `To access the settings, click on "Settings" from the navigation bar. The settings of this application are limited to selecting the language. The other fields, like the password, are modified by the administrator from the admin application.<br/>. click para ver (0:00)` },
    { id: 3, title: 'Create Crepe', videoUrl: vieoFile, instructions: `To access the view that allows you to create a crepe, in this case a sweet crepe, go from the main menu or the navigation bar and the view with instructions on how to make the crepe and how the cost is calculated will appear.<br/>. click para ver (0:00)<br/><br/>To select the ingredients for your crepe, just click on the ingredients you want for your crepe, whether it's the flour, the ingredients, the decorations, or the ice creams. If the customer changes their mind, you can delete ingredients, ice creams, or decorations from your crepe by clicking the red button next to the ingredient, and it will be removed from your crepe.<br/>. click para ver (0:02)<br/><br/>To add the crepe to the cart, click on "Add to Order"<br/>. click para ver (0:24)<br/><br/>These actions repeat for savory crepes, waffles, and waffle baskets.` },
    { id: 4, title: 'Edit Crepe', videoUrl: vieoFile1, instructions: `To edit a crepe, click on the "Edit" button for the crepe you want to edit. After clicking, it will take you to a view where you can edit the ingredients of your crepe.<br/>. click para ver (0:03)<br/><br/>The process is practically the same as creating the crepe, except here you are editing an existing crepe, not creating a new one.<br/>. click para ver (0:07)<br/><br/>These actions repeat for savory crepes, waffles, and waffle baskets.` },
    { id: 5, title: 'Create Drink', videoUrl: vieoFile2, instructions: `To access the view that allows you to add a drink, simply go from the main menu or the navigation bar, and a view will appear where you can add a drink.<br/>. click para ver (0:00)<br/><br/>To add a drink to the order, click on the drink you want to add. You can change the drink by clicking on the selected drink to swap it with another one, and to add it to the order, click on "Add to Order."<br/>. click para ver (0:03)<br/><br/>These actions repeat for cold drinks, salads, and snacks.` },
    { id: 6, title: 'Edit Drink', videoUrl: vieoFile3, instructions: `To edit a drink, click on the "Edit" button for the drink you want to edit. After clicking, it will take you to a view where you can change the selected drink.<br/>. click para ver (0:02)<br/><br/>The process is practically the same as creating the drink, except here you are editing an existing drink, not creating a new one.<br/>. click para ver (0:04)<br/><br/>These actions repeat for cold drinks, salads, and snacks.` },
    { id: 7, title: 'Delete Items from Cart', videoUrl: vieoFile4, instructions: `To delete a crepe, a drink, or any item you’ve added to the cart, simply click on the delete button next to the item you want to remove.<br/>. click para ver (0:02)<br/><br/>These actions repeat for any product: cold drinks, salads, snacks, savory crepes, waffles, and waffle baskets.` },
    { id: 8, title: 'Delete Ingredients in Cart', videoUrl: vieoFile5, instructions: `There are cases where products have already been sold and are out of stock, or there are not enough ingredients, and you need to leave a specific number in the order or simply change the inventory value to false. This will generate a message on top of the item with the inventory issue, telling you to remove a certain number of ingredients or that an ingredient is out of stock.<br/>. click para ver (0:02)<br/><br/>In these cases, the cart allows you to remove that ingredient to resolve the inventory issue and proceed with the sale, so there is no need to go back and edit the crepe just to remove the ingredient.<br/>. click para ver (0:04)<br/><br/>These actions repeat for savory crepes, waffles, and waffle baskets.` },
    { id: 9, title: 'Inventory Function', videoUrl: vieoFile6, instructions: `This video shows how the stock works in the application, so if you don’t have enough inventory, it will not allow you to complete the purchase unless the current inventory requirements are met. The API handles this check, and it will return you to the cart view with the orders but with indicators showing where there is insufficient stock so that you can modify it.<br/>. click para ver (0:01)<br/><br/>Once the order meets the inventory requirements, the cash register application will generate a PDF with the invoice details, and the inventory will be updated by subtracting the sold ingredients, generating the sales and invoices warehouse, which can be accessed through the admin application.<br/>. click para ver (0:29)` },
    { id: 10, title: 'Print Order', videoUrl: vieoFile7, instructions: `There are times when it’s not necessary to make the payment immediately or simply print the order so the cook can prepare it. For this, there is the "Print Order" function, which does not make a sale, but only prints the order for the cook. To do this, go to the cart and click on "Print Order."<br/>. click para ver (0:06)` },
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

export default AdminCajaEn;

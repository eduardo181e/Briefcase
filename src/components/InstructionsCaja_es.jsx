import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/caja/crepaDulce/crepaDulce_es.mp4"
import vieoFile1 from "../../public/videos/caja/crepaDulceEdit/crepaDulceEdit_es.mp4"
import vieoFile2 from "../../public/videos/caja/bebidas/bebidas_es.mp4"
import vieoFile3 from "../../public/videos/caja/editBebida/editBebida_es.mp4"
import vieoFile4 from "../../public/videos/caja/deleteBebida/deleteBebida_es.mp4"
import vieoFile5 from "../../public/videos/caja/editIngCarr/eliminarIngCarrito_es.mp4"
import vieoFile6 from "../../public/videos/caja/funcionStock/funcionCheackStock_es.mp4"
import vieoFile7 from "../../public/videos/caja/imprimirOrden/imprimirOrden_es.mp4"
import vieoFile8 from "../../public/videos/caja/configuracion/configuracion_es.mp4"
import vieoFile9 from "../../public/videos/caja/login/login_es.mp4"

const aspectRatio = 1500 / 690
const AdminCaja = () => {
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
    { id: 1, title: 'Iniciar Sesion', videoUrl: vieoFile9, instructions: `Para iniciar sesion en la aplicacion para vender, desde la barra de navegacion haz click en iniciar sesion o si no haz iniciado sesion la aplicaion siempre te mandara a ese componente luego ingresa los datos de usuario que te da el administrador que serian tu nombre de usuario y tu contraseña<br/>. click para ver (0:00)` },
    { id: 2, title: 'Configuracion', videoUrl: vieoFile8, instructions: `Para acceder a la configuracion haz click en configuracion desde la barra de navegacion, la configuracion de esta aplicacion se limita a la seleccion de el idioma de modo que lo demas como la contraseña y los demas campos los modifica el administrador desde la aplicacion de administracion<br/>. click para ver (0:00)` },
    { id: 3, title: 'Crear crepa', videoUrl: vieoFile, instructions: `Para acceder a la vista que te permite crear una crepa en este caso crepa dulce accede desde el menu principal o la barra de navegacion y te aparecera la vista con las instrucciones de como hacer la crepa y como es la manera en que se calcula el costo de la crepa<br/>. click para ver (0:00)<br/><br/>Para seleccionar los igredientres de tu crepa solo haz click sobe los ingredientes que quieres en tu crepa ya sea la harina, los ingredientes, las decoraciones o las nieves, haci como si hiciste una seleccion y el cliente cambio de opinion, en la seccion de tu crepa puedes eliminar los ingredientes, nieves o decoracion haciendo click en el boton rojo que aparece al lado de el ingrediente y se eliminara de tu crepa<br/>. click para ver (0:02)<br/><br/>Para agregar la crepa al carrito haz click en agregar a la orden <br/>. click para ver (0:12)
    <br/><br/>Todas estas acciones se repiten crepa salada, waffle y waffle canasta` },
    { id: 4, title: 'Editar crepa', videoUrl: vieoFile1, instructions: `Para editar una crepa haz click en el boton editar en la crepa que quiere editar al hacer click le mandara a una vista para editar los elementos de tu crepa<br/>. click para ver (0:01)<br/><br/> El proceso es practicamente el mismo que crear la crepa solo que aqui estas editado una crepa existente no creandola <br/>. click para ver (0:12)<br/><br/>Todas estas acciones se repiten crepa salada, waffle y waffle canasta` },
    { id: 5, title: 'Crear bebida', videoUrl: vieoFile2, instructions: `Para acceder a la vista que te permite agregar una bebida solo ve desde el menu principalo o la barra de navegacion te aparecera una vista para que puedas agregar una bebida<br/>. click para ver (0:00)<br/><br/>Para agregar una bebida a la orden haz click en la bebida que quieres agregar, puedes cambiar la bebida que seleccionaste haciendole click a la bebida a la babida por la que la quieres cambiar y para agregar a la orden haz click a agregar orden<br/>. click para ver (0:03) <br/><br/>Todas estas acciones se repiten para bebida fria, ensaladas y botanas` },
    { id: 6, title: 'Editar bebida', videoUrl: vieoFile3, instructions: `Para editar una bebida haz click en el boton editar en la bebida que quiere editar al hacer click le mandara a una vista para cambiar la bebida que haz seleccionado en ese campo<br/>. click para ver (0:02)<br/><br/> El proceso es practicamente el mismo que crear la bebida solo que aqui estas editado una bebida existente no creandola <br/>. click para ver (0:4)<br/><br/>Todas estas acciones se repiten para bebida fria, ensaladas y botanas` },
    { id: 7, title: 'Eliminar elementos del carrito', videoUrl: vieoFile4, instructions: `Para eliminar ya sea una crepa una bebida o lo que sea que ayas agregado a la crepa solo haz click en el boton eliminar de el elemento que quieres eliminar<br/>. click para ver (0:02)<br/><br/>Todas estas acciones se repiten para cualquier producto: bebida fria, ensaladas, botanas, crepa salada, waffle y waffle canasta` },
    { id: 8, title: 'Eliminar ingredientes en el carrito', videoUrl: vieoFile5, instructions: `Hay casos en que hay productos que ya se vendieron y se agotaron o no hay suficientes ingredientes y tienes que dejar un numero espesifico en la orden o simplemente cambiaron el valor de el inventario a false lo cual le generar un mensaje por ensima de el elemento que tiene el problema de inventario diciendole que tiene que elimanr un cierto numero de ingredientes o que un ingrediente ya no tiene inventario<br/>. click para ver (0:02)<br/><br/>En estos casos el carrito te permite elimanar ese ingrediente en para solucionar el problema de inventario y poder proceder con la venta de modo que no hay necesidad de entrar a editar la crepa para solo eliminar el ingrediente <br/>. click para ver (0:04)<br/><br/>Todas estas acciones se repiten crepa salada, waffle y waffle canasta` },
    { id: 9, title: 'Funcion de inventario', videoUrl: vieoFile6, instructions: `Este video es una muestra de como funciona el stock de la aplicacion de modo que al tu no tener sufuciente inventario no te permitira completar la compra a menos de que cumplas con el inventario actual, lo que se encarga de verificar esto es el api, esto le debolvera a la vista de el carrito con las ordenes pero con los indicadores de donde no hay suficiente stock para que lo modifiques<br/>. click para ver (0:02)<br/><br/>Una vez el la orden cumpla con los requisitos de el inventario la aplicacion de la caja generara un pdf con la informacion de la factura y a su vez el inventario se actualizara restando los ingredientes que se vendieron generando el alamacen de facturas y de vnats que se puede acceder a travez de la aplicacion de administracion<br/>. click para ver (0:19)` },
    { id: 10, title: 'Imprimir Orden', videoUrl: vieoFile7, instructions: `Hay veces que no es necesario hacer el cobro desde el principio o simplemente imprimir la orden para que el cocinero la pueda realizar para esto existe la funcion de imprimir orden que esto no hace ninguna venta solo imprime la orden para que el cocinero la pueda ordenar. Para esto solo ve al carrito y desde hay haz click en imprimir orden<br/>. click para ver (0:00)` },
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

export default AdminCaja;

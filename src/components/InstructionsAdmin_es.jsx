import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/admin/adminBranch/adminBranch_es.mp4"
import vieoFile1 from "../../public/videos/admin/configuracion/configuracion_es.mp4"
import vieoFile2 from "../../public/videos/admin/facturas/facturasGlobales_es.mp4"
import vieoFile3 from "../../public/videos/admin/sucursales/sucursales_es.mp4"
import vieoFile4 from "../../public/videos/admin/stock/stock_es.mp4"
import vieoFile5 from "../../public/videos/admin/crepaDulceProductos/productoComplementos_es.mp4"
import vieoFile6 from "../../public/videos/admin/drinksProductos/productosBebidasCalientes_es.mp4"
import vieoFile7 from "../../public/videos/admin/precios/preciosCrepas_es.mp4"
import vieoFile8 from "../../public/videos/admin/usuariosCaja/usuariosCaja_es.mp4"
import vieoFile9 from "../../public/videos/admin/ventas/ventasGlobales_es.mp4"
import vieoFile10 from "../../public/videos/admin/signup/signup_es.mp4"
import vieoFile11 from "../../public/videos/admin/login/login_es.mp4"


const aspectRatio = 1500 / 690
const AdminIns = () => {
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
    { id: 1, title: 'Registrarte', videoUrl: vieoFile10, instructions: `Para registrate en la aplicacion y poder administrar tu empresa para vender crepas ve desde la barra de navegacion a registrarse y despues ingresa los datos que te pide y automaticamente una vez te registres se iniciara sesion automaticamente para que puedas empezar a administrar tu empresa al igual podras iniciar sesion despues solo con tu nombre de usuario y tu contraseña<br/>. click para ver (0:00)<br/><br/>La aplicacion tiene una funcion que cierra sesion automaticamente cuando se cumple una hora despues de el ultimo inicio de sesion para mas seguridad de la cuenta` },    
    { id: 2, title: 'Iniciar Sesion', videoUrl: vieoFile11, instructions: `Para iniciar sesion en la aplicacion para vender, desde la barra de navegacion haz click en iniciar sesion o si no haz iniciado sesion la aplicaion siempre te mandara a ese componente luego ingresa los datos de usuario que te da el administrador que serian tu nombre de usuario y tu contraseña<br/>. click para ver (0:00)<br/><br/>La aplicacion tiene una funcion que cierra sesion automaticamente cuando se cumple una hora despues de el ultimo inicio de sesion para mas seguridad de la cuenta` },
    { id: 3, title: 'Administracion de facturas globales', videoUrl: vieoFile2, instructions: `Para acceder a las facturas que an hecho todas las sucursales dentro de la cuenta ve desde el menu principal a facturas y te apareceran todas las facturas que an estado produciendo tus sucursales de modo que puede verificar y comprobar ordenes si hay algun tipo de problema<br/>. click para ver (0:00)<br/><br/>Para poder ver una factura en especifico por su fecha o un conjunto de facturas solo marca la fecha de inicio y fin del lapso y despues haz click en generar facturas<br/>. click para ver (0:02)<br/><br/>Puedes ver la factura a detalle para ver quien hizo el cobro su total y lo que se vendio en esa venta asi como poder imprimir la factura<br/>. click para ver (0:18)` },
    { id: 4, title: 'Administracion de ventas globales', videoUrl: vieoFile9, instructions: `Para acceder a las ventas que an hecho todas las sucursales dentro de la cuenta ve desde el menu principal a ventas y te apareceran todas las ventas que an estado produciendo tus sucursales de modo que puede ver como van las ventas en un lapso de tiempo ver productos mas demandados etc<br/>. click para ver (0:00)<br/><br/>Para poder ver una venta en especifico por su fecha o un conjunto de ventas solo marca la fecha de inicio y fin del lapso y despues haz click en generar ventas<br/>. click para ver (0:05)<br/><br/>Haz click en el id de la factura para ver la factura a detalle para ver quien hizo el cobro su total y lo que se vendio en esa venta asi como poder imprimir la factura<br/>. click para ver (0:15)` },
    { id: 5, title: 'Crear, editar y eliminar sucursal', videoUrl: vieoFile3, instructions: `Para poder crear una nueva sucursal haz click en nueva sucursal<br/>. click para ver (0:00)<br/><br/>
      Para editar una nueva sucursal haz click en editar sucursal<br/>. click para ver (0:41)<br/><br/>
      Para eliminar una sucursal haz click en el icono de eliminar de la sucursal que quieres eliminar<br/>. click para ver (1:04)`},
    { id: 6, title: 'Administrar sucursal', videoUrl: vieoFile, instructions: `Para administrar una sucursal ve desde el menu principal a sucursales luego haz click en administrar sucursal para acceder a las facturas, ventas e inventario de la sucursal que seleccionaste<br/>. click para ver (0:00)<br/><br/>
      Aqui se muestra un ejemplo de como acceder a las ventas de la sucursal que tiene la misma mecanica de lapsos de las facturas para poder ver las ventas que se hicieron en un cierto lapso de tiempo<br/>. click para ver (0:05)`},
    { id: 7, title: 'Configuracion', videoUrl: vieoFile1, instructions: `Puede cambiar cualquier campo ya sea tu nombre de usuario y tu nombre completo y despues hacer click en actualizar usuario para que se apliquen los cambios<br/>. click para ver (0:00)<br/><br/>
    Puedes cambiar el idioma solo seleccionando cual es tu idioma este campo no es necesario guardalo en actualizar usuario solo seleccionando el idioma se cambia este campo<br/>. click para ver (0:05)<br/><br/>
    Para cambiar la contraseña de la cuenta solo haz click en cambiar contraseña, introduce la contraseña actual y la nueva contraseña y haz click en cambiar contraseña<br/>. click para ver (0:13)`},
    { id: 8, title: 'Inventario', videoUrl: vieoFile4, instructions: `Desde administrar sucursal accede al inventario de la sucursal que seleccionaste podras acceder a el inventario de cualquier producto ya sea de una unidad como bebidas que solo se selcciona la bebida o igual con las botanas y ensaladas o de ingredientes en espesifico como los ingredientes de una crepa o waffle<br/>. click para ver (0:00)<br/><br/>
      Para acceder al inventario de ese producto solo accede como si fueras a hacer la compra de una bebida o la compra de una crepa apara acceder a un ingrediente o nieve<br/>. click para ver (0:05)<br/><br/>
      Para actualizar el inventario hay dos tipos de inventario uno que solo se actualiza es si hay en existencia o no que si no hay en existencia y ya no se venda ese producto solo cambia el valor por false o en caso contrario que quieras que se siga vendiendo o se relleno el inventario cambialo por true el otro tipo de inventario es valor numerico que puedes modificar desde esta pagina de modo que puede colocar aqui en espesifico el numero de unidades que hay en existencia conforme sse vallan haciendo ventas se hiran registrando facturas y ventas y a la vez por cada venta que se alla echo de este producto ira disminuyendo dependiendo de cuantos se ayan vendido evitando robos y una administracion mas clara de tu sucursal y tu negocio<br/>. click para ver (0:10)`},
      { id: 9, title: 'Ingredientes', videoUrl: vieoFile5, instructions: `Desde el menu principal o en la barra de navegacion haz clic en productos, despues para poder acceder a un producto ay sea un ingrediente de una crepa o de un waffle el proceso es practicamente el mismo solo cambian los tipos de ingredientes nieves, etc.<br/>. click para ver (0:00)<br/><br/>
        Para crear un nuevo ingrediente haz click en nuevo ingrediente y te aparecera un formulario para que rellenes los espacios necesarios para tener un nuevo ingrediente este es un tipo de ingrediente que se repite en waffle canasata y normal en el cual se ve que tipo de ingrediente complementario es y se dibiden a la hora de crear una creapa en frutos, frutos secos y otros<br/>. click para ver (0:05)<br/><br/>
        En esta misma seccion del formulario dos formas de administrar el inventario si eliges que tenga inventario al seleccionar true el producto tendra un inventario numerico el cual puedes modificar y ira disminuyendo conforme se vallan haciendo ventas en caso contrario de que sea false el inventario solo sera un booleano que te dira si hay en existencia o no que se da para productos que no se pueden contar y solo la administracion puede modificar para que indique que ya no hay en existencia y ya no se pueda vender este producto esto es para tener un buen control de lo que se vende y no aya problemas de administracion<br/>. click para ver (0:14)<br/><br/>
        Para editar un producto ya sea un nombre su tipo o lo que sea de ese inventario haz click en editar ingrediente y podras acceder al formulario para editar lo que quieras<br/>. click para ver (0:22)<br/><br/>
        Para eliminar un producto haz click en el icono de eliminar y el producto se eliminara ya no estara disponible para que se seleccione para vender en caja y a su vez su inventario en todas las sucursales se eliminaran<br/>. click para ver (0:44)`},
        { id: 10, title: 'Bebidas', videoUrl: vieoFile6, instructions: `El proceso de los ingredientes de crear, editar, borrar y seccion de inventarios se repiten en esta seccion y en todas solo es un ejemplo para que se vea como es en caso de un producto de una sola unidad es decir los demas ingredientes solo son una parte de una crepa o waffle que se customiza y se ponen ingredientes al gusto en este caso solo se selecciona el producto que quieres vender de modo que la unica diferencia es que desde aqui puedes ponerle un precio a el producton<br/>. click para ver (0:13)`},
        { id: 11, title: 'Precios', videoUrl: vieoFile7, instructions: `Para editar los precios de las crepas ya sea salada o dulce al igual que los guafles el proceso es el mismo varia en los tipos de precios que se espesifican a la hora de hacer una nueva crepa o waffle como el precio de los ingredientes extras, el precio de las nieves cuando se les agrega una nieve o el precio de las decoraciones extra en este caso los precios solo se pueden editar ya que el precio es parte de la estrcutura de la manera de cobrar de la aplicacion`},
        { id: 12, title: 'Usuarios de Caja', videoUrl: vieoFile8, instructions: `Esta seccion sirve para administrart los usuarios de caja de modo que puedes administrar quien puede vender de este modo llevas un control de lo que vende cada empleado o si hay algun problema en la seccion de las facturas siempre se imprime el numero de caja por lo que puedes ver quien esta encargado de esa caja y ver quien hizo una venta en espesifico por ejemplo en una factura que la igual al hacer click en el id del usuario en la seccion donde se ven todas las facturas te lanzara a una vista donde veras la informacion de el usuario<br/>. click para ver (0:01)<br/><br/>
        Para crear u nuevo usuario haz click en nuevo usuario<br/>. click para ver (0:01)<br/><br/>
        Para editar un usuario haz click en editar usuario<br/>. click para ver (0:23)<br/><br/>
        Para eleiminar un usuario haz click en el icono de eliminar<br/>. click para ver (0:23)<br/><br/>`},
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

export default AdminIns;

import React, { useEffect, useRef, useState } from 'react';
import ParticlesComponent from './Particles';
import '../styles/button.css';
import "../styles/nav1.css"
import "../styles/instruction.css"
// Importamos los videos
import vieoFile from "../../public/videos/admin/adminBranch/adminBranch_en.mp4"
import vieoFile1 from "../../public/videos/admin/configuracion/configuracion_en.mp4"
import vieoFile2 from "../../public/videos/admin/facturas/facturasGlobales_en.mp4"
import vieoFile3 from "../../public/videos/admin/sucursales/sucursales_en.mp4"
import vieoFile4 from "../../public/videos/admin/stock/stock_en.mp4"
import vieoFile5 from "../../public/videos/admin/crepaDulceProductos/productoComplementos_en.mp4"
import vieoFile6 from "../../public/videos/admin/drinksProductos/productosBebidasCalientes_en.mp4"
import vieoFile7 from "../../public/videos/admin/precios/preciosCrepas_en.mp4"
import vieoFile8 from "../../public/videos/admin/usuariosCaja/usuariosCaja_en.mp4"
import vieoFile9 from "../../public/videos/admin/ventas/ventasGlobales_en.mp4"
import vieoFile10 from "../../public/videos/admin/signup/signup_en.mp4"
import vieoFile11 from "../../public/videos/admin/login/login_en.mp4"


const aspectRatio = 1500 / 690
const AdminInsEn = () => {
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
      { id: 1, title: 'Register', videoUrl: vieoFile10, instructions: `To register in the application and manage your business to sell crepes, go from the navigation bar to register and then enter the required information. Once you register, you will automatically log in to start managing your business. You will also be able to log in later with just your username and password.<br/>. click para ver (0:00)<br/><br/>The application has a function that automatically logs you out after one hour from the last login for added account security.` },
      { id: 2, title: 'Log In', videoUrl: vieoFile11, instructions: `To log in to the application to sell, from the navigation bar click on "Log In" or if you haven't logged in, the application will always send you to that component. Then enter the user details provided by the administrator, which will be your username and password.<br/>. click para ver (0:00)<br/><br/>The application has a function that automatically logs you out after one hour from the last login for added account security.` },
      { id: 3, title: 'Global Invoice Management', videoUrl: vieoFile2, instructions: `To access the invoices created by all branches within the account, go from the main menu to invoices, and you will see all the invoices your branches have created. You can verify and check orders if there are any issues.<br/>. click para ver (0:00)<br/><br/>To view a specific invoice by date or a set of invoices, select the start and end date range and then click on "Generate Invoices"<br/>. click para ver (0:02)<br/><br/>You can view the detailed invoice to see who made the charge, the total, and what was sold in that transaction, as well as print the invoice.<br/>. click para ver (0:10)` },
      { id: 4, title: 'Global Sales Management', videoUrl: vieoFile9, instructions: `To access the sales made by all branches within the account, go from the main menu to sales, and you will see all the sales made by your branches. You can check the sales over a period of time and see the most demanded products.<br/>. click para ver (0:00)<br/><br/>To view a specific sale by date or a set of sales, select the start and end date range and then click on "Generate Sales"<br/>. click para ver (0:05)<br/><br/>Click on the invoice ID to see the invoice details to see who made the charge, the total, and what was sold in that transaction, as well as print the invoice.<br/>. click para ver (0:18)` },
      { id: 5, title: 'Create, Edit, and Delete Branch', videoUrl: vieoFile3, instructions: `To create a new branch, click on "New Branch"<br/>. click para ver (0:00)<br/><br/>To edit a branch, click on "Edit Branch"<br/>. click para ver (0:41)<br/><br/>To delete a branch, click on the delete icon of the branch you want to remove.<br/>. click para ver (0:55)` },
      { id: 6, title: 'Manage Branch', videoUrl: vieoFile, instructions: `To manage a branch, go from the main menu to branches and then click on "Manage Branch" to access the invoices, sales, and inventory of the selected branch.<br/>. click para ver (0:00)<br/><br/>Here is an example of how to access the sales for the branch, which works similarly to invoices. You can see the sales made within a specific time range.<br/>. click para ver (0:05)` },
      { id: 7, title: 'Settings', videoUrl: vieoFile1, instructions: `You can change any field, such as your username and full name, and then click on "Update User" for the changes to take effect.<br/>. click para ver (0:00)<br/><br/>You can change the language by simply selecting your desired language. This field does not need to be saved by clicking "Update User"; just selecting the language will change it.<br/>. click para ver (0:05)<br/><br/>To change your account password, click on "Change Password," enter the current and new passwords, and click on "Change Password."<br/>. click para ver (0:13)` },
      { id: 8, title: 'Inventory', videoUrl: vieoFile4, instructions: `From "Manage Branch," access the inventory of the selected branch. You can view the inventory of any product, whether it's a unit such as beverages or specific ingredients like those for crepes or waffles.<br/>. click para ver (0:00)<br/><br/>To access the inventory of a product, simply go as if you were purchasing a beverage or a crepe to access an ingredient or ice cream.<br/>. click para ver (0:02)<br/><br/>To update inventory, there are two types: one that only updates if the product is in stock or not. If it's not in stock and no longer sold, set it to false; otherwise, change it to true. The other type is numeric inventory<br/>. click para ver (0:06)` },
      { id: 9, title: 'Ingredients', videoUrl: vieoFile5, instructions: `From the main menu or navigation bar, click on products. Then, to access a product, whether it's an ingredient for a crepe or waffle, the process is practically the same, only the types of ingredients (such as ice cream, etc.) change.<br/>. click para ver (0:00)<br/><br/>To create a new ingredient, click on "New Ingredient" and a form will appear for you to fill out the required fields to create a new ingredient. This is a type of ingredient that is repeated in waffles, both normal and with toppings, and will be separated by categories like fruits, nuts, and others when creating a crepe.<br/>. click para ver (0:05)<br/><br/>In this section of the form, there are two ways to manage inventory: if you choose that it has inventory by selecting "true," the product will have numeric inventory that you can modify and it will decrease as sales are made. If it's "false," the inventory will simply be a boolean indicating whether it is in stock or not, and only the administration can modify it to indicate that the product is no longer available for sale.<br/>. click para ver (0:14)<br/><br/>To edit a product, whether its name, type, or anything else in its inventory, click on "Edit Ingredient" to access the form and modify it.<br/>. click para ver (0:22)<br/><br/>To delete a product, click on the delete icon and the product will be removed and no longer available to select for sale in the cashier, and its inventory will be deleted from all branches.<br/>. click para ver (0:30)` },
      { id: 10, title: 'Drinks', videoUrl: vieoFile6, instructions: `The process for creating, editing, deleting, and managing inventory for ingredients is the same in this section as in all others. It's just an example to show how it works for a single-unit product, meaning the other ingredients are part of a crepe or waffle that is customized and can include additional ingredients. In this case, you just select the product you want to sell, and the only difference is that here you can assign a price to the product.<br/>. click para ver (0:00)` },
      { id: 11, title: 'Prices', videoUrl: vieoFile7, instructions: `To edit the prices of crepes, whether sweet or savory, and waffles, the process is the same. The only difference is the types of prices specified when creating a new crepe or waffle, such as the price of extra ingredients, ice cream, or additional decorations. In this case, the prices can only be edited, as the price is part of the structure for how the application charges for these items.` },
      { id: 12, title: 'Cash Register Users', videoUrl: vieoFile8, instructions: `This section is for managing cash register users, allowing you to control who can make sales. This way, you can track what each employee sells, or if there's an issue with invoices, you can always see which user was responsible for the transaction based on the register number printed on the invoice.<br/>. click para ver (0:01)<br/><br/>To create a new user, click on "New User"<br/>. click para ver (0:01)<br/><br/>To edit a user, click on "Edit User"<br/>. click para ver (0:29)<br/><br/>To delete a user, click on the delete icon.<br/>. click para ver (0:41)<br/><br/>` },
        
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

export default AdminInsEn;

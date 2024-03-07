import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/nav.css"
function Navbar() {
  const [t, i18n] = useTranslation("global");
  function scrollBy(targetElement){
    const element = document.getElementById(targetElement);
    // Calculare la posición Y del elemento
    const yDescription = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: yDescription,
      behavior: 'smooth',
    });
  }
  function cerrarNav(){
    const element = document.querySelector(".lateralNav")
    element.classList.remove("lateral-activo")
    element.classList.add("lateral-desactivado")
  }
  return (
    <>
    <nav className="staticNav">
      <ul>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('description')

        }}><a href="">{t('about.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('skills')

        }}><a href="">{t('skills.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('work')

        }}><a href="">{t('project.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('contact')

        }}><a href="">{t('contact.nav')}</a></li>
        <li>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </li>
      </ul>
    </nav>
    <div style={{zIndex: '9'}} onClick={() => {
          const element = document.querySelector(".lateralNav")
          element.classList.remove("lateral-desactivado")
          element.classList.add("lateral-activo")
          
        }} className="iconNav"><ion-icon name="menu-outline"></ion-icon></div>  
    <div className="lateralNav1">
    <nav className="lateralNav">
      <ul>
        <li onClick={() => {
cerrarNav()
        }}><ion-icon name="menu-outline"></ion-icon> </li>
        <li onClick={(e) => {            
          e.preventDefault();
          scrollBy('description')
cerrarNav()
        }}><a href="">{t('about.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('skills')
          cerrarNav()
        }}><a href="">{t('skills.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('work')
          cerrarNav()
        }}><a href="">{t('project.nav')}</a></li>
        <li onClick={(e) => {  
          e.preventDefault();
          scrollBy('contact')
          cerrarNav()
        }}><a href="">{t('contact.nav')}</a></li>
        <li>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </li>
      </ul>
    </nav>        
    </div>


    </>

    
  );
}

export default Navbar;

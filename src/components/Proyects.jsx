import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/proyect.css'
import Button1 from './Button'
function Proyects() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className='proyectAll'>
      <h1 style={{textAlign: "left"}}>{t('projects')}</h1>
      <div className="proyect">
        <h2 className='titleProject'>{t('project.1')}</h2>
        <div className="proyectDesc">
          <div className='descripcionProyect1'>
          <p>{t('project.admin')}</p>
          <ul>
            <li>
            {t('project.admin.list.1')} 
            </li>
            <li>
            {t('project.admin.list.2')} 
            </li>
            <li>
            {t('project.admin.list.3')} 
            </li>
          </ul> 
          <div>
          <Button1 text={t('download')} link={t('download.admin')}></Button1>
            </div>   
            <div>
            <Button1 text={t('ir.pagina')} link="https://admin-53d8e.web.app/admin"></Button1>
            </div>           
          </div>
          <img className='admin' src="./admin.png" alt="" />
        </div>
      </div>
      <div className="proyect">
        <h2 className='titleProject'>{t('project.2')}</h2>
        <div className="proyectDesc">
          <div className='descripcionProyect1'>
          <p>{t('project.caja')}</p>
          <ul>
            <li>
            {t('project.caja.list.1')} 
            </li>
            <li>
            {t('project.caja.list.2')} 
            </li>
            <li>
            {t('project.caja.list.3')} 
            </li>
          </ul>  
          <div>

            <Button1 text={t('download')} link={t('download.caja')}></Button1>
            </div> 
            <div>
            <Button1 text={t('ir.pagina')} link="https://alien-walker-409421.web.app/signin"></Button1>

            </div>                
          </div>
          <img className='caja' src="./caja.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Proyects
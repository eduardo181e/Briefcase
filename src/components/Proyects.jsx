import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/proyect.css'
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
            <p>{t('download')}</p>
            <a>{t('download.admin')}</a>
            </div>           
          </div>
          <img className='admin' src="../../public/admin.png" alt="" />
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
            <p>{t('download')}</p>
            <a>{t('download.caja')}</a>
            </div>             
          </div>
          <img className='caja' src="../../public/caja.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Proyects
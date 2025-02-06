import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/proyect.css'
import Button1 from './Button'
import VideoPlayer from './VideoPlayer'
import VideoPlayer1 from './VideoPlayer1'
import VideoPlayer1En from './VideoPlayer1En'
import VideoPlayer2 from './VideoPlayer2'
import VideoPlayer2En from './VideoPlayer2En'
import VideoPlayerEn from './VideoPlayerEn'
import Button from './Button1'
function Proyects() {
  const [t, i18n] = useTranslation('global')
  return (
    <div className='proyectAll'>
      <h1 style={{textAlign: "left"}}>{t('projects')}</h1>
      <div className="proyect">
        <h2 className='titleProject'>{t('project.3')}</h2>
        <div className="proyectDesc">
          <div className='descripcionProyect1'>
          <p>{t('project.reflex')}</p>
          <ul>
          <li>
            {t('project.reflex.list.1')} 
            </li>
            <li>
            {t('project.reflex.list.2')} 
            </li>
            <li>
            {t('project.reflex.list.3')} 
            </li>
            <li>
            {t('project.reflex.list.4')} 
            </li>
          </ul> 
          <div>
          <Button1 text={t('download')} link={t('url.reflexs')}></Button1>
            </div>   
            <div>
            <Button text={t('download.1')} link="https://drive.usercontent.google.com/download?id=1PK_JDgpy7vYGETY49hGGwQxBdFD-JkXW&export=download&authuser=0"></Button>
            </div>           
          </div>
          {i18n.language === 'es' ? <VideoPlayer2 /> : <VideoPlayer2En />}
        </div>
      </div>
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
          <Button1 text={t('download')} link={t('url.admin')}></Button1>
            </div>   
            <div>
            <Button text={t('ir.pagina')} link="https://admin-53d8e.web.app/admin"></Button>
            </div>           
          </div>
          {i18n.language === 'es' ? <VideoPlayer /> : <VideoPlayerEn />}
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

            <Button1 text={t('download')} link={t('url.caja')}></Button1>
            </div> 
            <div>
            <Button text={t('ir.pagina')} link="https://alien-walker-409421.web.app/signin"></Button>

            </div>                
          </div>
          {i18n.language === 'es' ? <VideoPlayer1 /> : <VideoPlayer1En />}
        </div>
      </div>
    </div>
  )
}

export default Proyects
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/header.css'
function About() {
    const [t, i18n] = useTranslation('global')
  return (
    <div className='description' id='description'>
        <img className='profile' src="./20240301_165351.jpg" alt="profile" />
        <div className='descrcription1'>
        <h1 className='a-right'>{t("about")}</h1>
        <h2 className='a-right'>{t("quien.es")}</h2>
        <p className='a-right'>{t("about.description.1")}</p>
        <p className='a-right'>{t("about.description.2.1")}</p>
        <p className='a-right'>{t("about.description.2.2")}</p>
        <p className='a-right'>{t("about.description.2.3")}</p>
        <p className='a-right'>{t("about.description.3")}</p>
        </div>

    </div>
  )
}

export default About
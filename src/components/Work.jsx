import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/header.css'
function Work() {
    const [t, i18n] = useTranslation('global')
  return (
    <div id='work'>
        <h1 className='a-right'>{t("work.in")}</h1>
        <h2 className='a-right'>{t("work.in.1")}</h2>
    </div>
  )
}

export default Work
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/header.css'
function Header() {
    const [t, i18n] = useTranslation('global')
  return (
    <div>
        <h1 className='presentacion'>{t("precentacion")}</h1>
    </div>
  )
}

export default Header
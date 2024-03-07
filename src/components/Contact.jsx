import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/contact.css'
function Contact() {
    const [t, i18n] = useTranslation('global')
  return (
    <div style={{width: "80%"}} id='contact'>
        <h1 className='titleContact'>{t('contact')}</h1>
        <h2 className='titleContact2'>{t('contact.1')}</h2>
        <h3 className='titleContact3'>{t('contact.2')}</h3>
        <h3 className='titleContact3'>{t('contact.3')}</h3>
        <form action="">
            <h3 className='titleForm'>{t('name')}</h3>
            <input type="text" />
            <h3 className='titleForm'>{t('email')}</h3>
            <input type="text" />
            <h3 className='titleForm'>{t('mensaje')}</h3>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <br />
            <button className='submitContact'>{t('send')}</button>
        </form>
        <h1 className='titleContact emailTitle'>{t('email')}</h1>
        <h2 className='email' style={{textAlign: 'left'}}>eduardobanueloscarrillo@gmail.com</h2>
    </div>
  )
}

export default Contact
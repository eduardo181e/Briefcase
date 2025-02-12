import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import '../styles/contact.css'
import Button from './Button1';
import '../styles/button.css'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ak0t07d', 'template_baddjqj', form.current, {
        publicKey: '8IKiLIz6w2Wd7Ht4h',
      })
      .then(
        () => {
          alert('Thank you for sending your email')
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    const [t, i18n] = useTranslation('global')
  return (
    <div style={{width: "100%"}} id='contact'>
        <h1 className='titleContact'>{t('contact')}</h1>
        <h2 className='titleContact2'>{t('contact.1')}</h2>
        <h3 className='titleContact3'>{t('contact.2')}</h3>
        <h3 className='titleContact3'>{t('contact.3')}</h3>
        <form ref={form} onSubmit={sendEmail}>
            <h3 className='titleForm'>{t('name')}</h3>
            <input type="text" name="user_name" />
            <h3 className='titleForm'>{t('email')}</h3>
            <input type="text" name="user_email" />
            <h3 className='titleForm'>{t('mensaje')}</h3>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <br />
            <button className='submitContact'>{t('send')}</button>
        </form>
        <h1 className='titleContact emailTitle'>{t('email')}</h1>
        <h2 className='email' style={{textAlign: 'left'}}>eduardobanueloscarrillo@gmail.com</h2>

        <h1 className='titleContact emailTitle'>GitHub</h1>
        <h2 className='email' style={{textAlign: 'left'}}>
        <Button text='GitHub' link="https://github.com/eduardo181e"></Button></h2>
    </div>
  )
}

export default Contact
import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__phone'>
            <h2 className='footer__title'>Phone</h2>
            <a href='tel:+439873456782' className='footer__text'>+43 ( 987 ) 345 - 6782</a>
          </div>
          <div className='footer__address'>
            <h2 className='footer__title'>
              Address
            </h2>
            <p className='footer__text'>
              Cracker Inc. 
              10 Cloverfield Lane
              Berlin, IL 10928
              Germany
            </p>
          </div>
          <div className='footer__shareUs'>
            <h2 className='footer__title'>Share us</h2>
            <a href='https://www.pinterest.com/' className='footer__text footer__link footer__link--pintrest'>
              https://www.pinterest.com/
            </a>
            <a href='https://www.facebook.com/' className='footer__text footer__link footer__link--fb'>
              https://www.facebook.com/
            </a>
            <a href='https://www.google.com/' className='footer__text footer__link footer__link--google'>
              https://www.google.com/
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

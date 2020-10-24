import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import Cart from '../Cart/Cart';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__container'>
          <Logo classes={'logo'}/>
          <Cart/>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import './NavMenu.scss'

export default function NavMenu() {
  return (
    <div>
      <BrowserRouter >
        <div className='navMenu'>
          <div className='container'>
            <div className='navMenu__container'>
              <NavLink exact to='/' className='navMenu__link' activeClassName='navMenu__link--active'>Home</NavLink>
              <NavLink to='/aboutUs' className='navMenu__link' activeClassName='navMenu__link--active'>About Us</NavLink>
              <NavLink to='/contats' className='navMenu__link' activeClassName='navMenu__link--active'>Contacts</NavLink>
              <NavLink to='/checkout' className='navMenu__link' activeClassName='navMenu__link--active'>Checkout</NavLink>
              <NavLink to='/account' className='navMenu__link' activeClassName='navMenu__link--active'>Account</NavLink>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

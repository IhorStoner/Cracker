import React from 'react'
import NavMenu from '../NavMenu/NavMenu'
import './HomePage.scss'
import Logo from '../Logo/Logo'
import CrackerConstructor from '../CrackerConstructor/CrackerConstructor'
import Footer from '../Footer/Footer'

export default function HomePage() {
  return (
    <div>
      <div className='mainContent'> 
        <NavMenu/>
        <section className='tasteIt'>
          <div className='container'>
            <h2 className='tasteIt__title'>
              mostly tastes with freshes
            </h2>
            <div className='tasteIt__content'>
              <p className='tasteIt__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet,
              </p>
            </div>
            <div className='tasteIt__btnContainer'>
              <button className='tasteIt__btn'>Taste It</button>
            </div>
          </div>
        </section>
      </div>
      <section className='about'>
        <div className='container'>
          <h2 className='about__title'>About Cracker</h2>
          <div className='about__content'>
            <p className='about__text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <Logo theme={'black'} subText={'none'} classes='about__logo logo'/>
          </div>
          <CrackerConstructor></CrackerConstructor>
        </div>
      </section>
      <Footer></Footer>
     </div>
  )
}

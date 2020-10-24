import React from 'react'
import { useSelector } from 'react-redux'
import semen from '../../assets/png/semen.png'
import CartItem from '../CartItem/CartItem'
import './Cart.scss'
import soybean from '../../assets/svg/soybeanBlack.svg'
import wheat from '../../assets/svg/wheatBlack.svg'
import sesame from '../../assets/svg/sesameBlack.svg'
import corn from '../../assets/svg/cornBlack.svg'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const counter = cart.length

  const totalPrice = () => {
    let price = 0;
    cart.forEach(item  => {
      price += Number(item.price)
    })
    return price
  }

  return (
    <div>
      <div className='cart'>
        <div className='cart__semen'>
          <img src={semen} alt='semen'/>
          <span className='cart__counter'>{counter}</span>
        </div>
        <div className='cart__total'>
          <span className='cart__total__text'>
            Total:
          </span>
          <span className='cart__total__sum'>{totalPrice()} {'\u20AC'}</span>  
        </div>
        <div className='cart__details'>Details </div>
        <div className='cartDetails'>
          <div className='cartDetails__iconsContainer'>
            <img src={soybean} className='cartDetails__icon'></img>
            <img src={sesame} className='cartDetails__icon'></img>
            <img src={wheat} className='cartDetails__icon'></img>
            <img src={corn} className='cartDetails__icon'></img>
          </div>
          <div className='cartDetails__items'>
            {
              cart.length === 0 
              ?
              <div className='cartDetails__cartEmpty'>oops... your cart is empty, start shopping</div>
              :
              cart.map(item => <CartItem item={item}/>) 
            }
          </div>
          <div className='cartDetails__checkout'>
            <span className='cartDetails__totalPrice'> 
              Total:  
              <span className='cartDetails__totalPrice--font'>
                {totalPrice()} {'\u20AC'}
              </span>
            </span>
            <button className='cartDetails__btnBuy'>Chekout</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

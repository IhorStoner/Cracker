import React from 'react'
import './CartItem.scss'
import { removeProductFormCart } from '../../redux/actions/cartAction'
import { useDispatch } from "react-redux";

export default function CartItem(props) {
  const item = props.item;
  const dispatch = useDispatch()

  return (
    <div className='cartItem'>
      <div className='cartItem__container'>
        <div className='cartItem__item'>{item.soybean}%</div>
        <div className='cartItem__item'>{item.sesame}%</div>
        <div className='cartItem__item'>{item.wheat}%</div>
        <div className='cartItem__item'>{item.corn}%</div>
        <div className='cartItem__item cartItem__item--black'>{item.weigth}KG</div>
        <div className='cartItem__item cartItem__item--black'>{item.price} {'\u20AC'}</div>
        <button className='cartItem__btn' onClick={() => dispatch(removeProductFormCart(item.id))}></button>
      </div>
    </div>
  )
}

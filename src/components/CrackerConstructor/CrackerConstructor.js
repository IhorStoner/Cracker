import React, { useState, useEffect, useMemo, useCallback } from 'react'
import './CrackerConstructor.scss'
import soybean from '../../assets/svg/soybean.svg'
import sesame from '../../assets/svg/sesame.svg'
import wheat from '../../assets/svg/wheat.svg'
import corn from '../../assets/svg/corn.svg'
import pacage from '../../assets/svg/pacage.svg'
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/actions/cartAction";


export default function CrackerConstructor() {
  const [ soybeanCount, setSoybeanCount ] = useState(0);
  const [ sesameCount, setSesameCount ] = useState(0);
  const [ wheatCount, setWheatCount ] = useState(0);
  const [ cornCount, setCornCount ] = useState(0);
  const [ product, setProduct ] = useState({});
  const dispatch = useDispatch();

  const sum = useMemo(() => +soybeanCount + +sesameCount + +wheatCount, [soybeanCount, sesameCount, wheatCount])
  const setIfLTEMax = (max, current, setState) => e => {
    const delta = e.target.value - current;
    return sum + delta <= max ? setState(e.target.value) : false
  }

  useEffect(() => {
    setCornCount(100 - sum)

    const weigth = document.getElementById('packList').value
    const price = () => {
      let price;
      if(weigth === '0.50') {
        price = '28.50';
      } else if (weigth === '50') {
        price = '50.5'
      } else {
        price = '81.50'
      }
      return price;
    }
    setProduct(
      {
        id: Date.now(),
        soybean: soybeanCount,
        sesame: sesameCount,
        wheat: wheatCount,
        corn: cornCount,
        weigth: weigth ? weigth : '0.50',
        price: price(),
      }
    )
  }, [soybeanCount, sesameCount, wheatCount])

  return (
    <div className='crackerConstructor'>
      <h2 className='crackerConstructor__title'>Cracker Constructor</h2>
      <p className='crackerConstructor__valueContainer'>Current value: <span className='crackerConstructor__value'>0</span>{'\u20AC'}</p>

      <div className='crackerConstructor__app constructor'>
        <div className='constructor__soybean constructor__item'>
          <img src={soybean} alt='soybean'/>
          <input className='constructor__slider constructor__slider--soybean' type="range" min="0" max="100" step="1" value={soybeanCount}  onChange={setIfLTEMax(100, soybeanCount, setSoybeanCount)}></input>
          <span className='constructor__percent'>{soybeanCount}%</span>
        </div>
        <div className='constructor__sesame constructor__item'>
          <img src={sesame} alt='sesame'/>
          <input className='constructor__slider constructor__slider--sesame' type="range" min="0" max="100" step="1" value={sesameCount}  onChange={setIfLTEMax(100, sesameCount, setSesameCount)}></input>
          <span className='constructor__percent'>{sesameCount}%</span>
        </div>
        <div className='constructor__wheat constructor__item'>
          <img src={wheat} alt='wheat'/>
          <input className='constructor__slider constructor__slider--wheat' type="range" min="0" max="100" step="1" value={wheatCount}  onChange={setIfLTEMax(100, wheatCount, setWheatCount)}></input>
          <span className='constructor__percent'>{wheatCount}%</span>
        </div>
        <div className='constructor__corn constructor__item'>
          <img src={corn} alt='corn'/>
          <div className='constructor__sliderContainer'>
            <span className='constructor__sliderLine--left constructor__sliderLine'/>
            <input className='constructor__slider constructor__slider--corn' type="range" min="0" max="100" step="1" value={cornCount}></input>
            <span className='constructor__sliderLine--right constructor__sliderLine'/>
          </div>
          <span className='constructor__percent'>{cornCount}%</span>
        </div>
        <div className='constructor__choosePack'>
          <img src={pacage}/>
          <select name='pack' className='constructor__packList' id='packList'>
            <option value='0.50' className='constructor__packList__option' disabled>
              Choose your pack
            </option>
            <option value='0.50' className='constructor__packList__option' selected>
              Small pack
            </option >
            <option value='50' className='constructor__packList__option'>
              Medium pack
            </option>
            <option value='150' className='constructor__packList__option'>
              Large pack
            </option>
          </select>
        </div>
        <div className='constructor__btns'>
          <div className='constructor__btnContainer'>
            <button className='constructor__btnCheckout'/>
            <button className='constructor__subBtnCheckout' onClick={sum !== 0 ? () => dispatch(addProductToCart(product)) : null}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

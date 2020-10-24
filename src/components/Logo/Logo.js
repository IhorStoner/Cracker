import React from 'react'
import './Logo.scss'

export default function Logo(props) {
  const theme = props.theme;
  const subText = props.subText;
  const classes = props.classes;

  return (
    <div>
      <a href='/' className={classes}>
        <span className='logo__cracker' style = {{color: theme}}>
          Cracker
        </span>
        <span className='logo__text' style = {{display: subText}}>
          logo
        </span>
      </a>
    </div>
  )
}

import React from 'react'
import s from './Button.module.css'

const Button = ({texto}) => {
  return (
    <button className={[s.button, s.buttonSlide].join(' ')}>
      {texto}
    </button>
  )
}

export default Button
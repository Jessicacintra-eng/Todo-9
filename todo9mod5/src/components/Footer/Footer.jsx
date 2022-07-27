import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={s.footerBackground}></div>
      <p className={s.span}>Testando suas habilidades em HTML, CSS e JS.</p>
      <p className={s.span}>Linx Impulse</p>
      <p className={s.span}>2019</p>
    </footer>
  )
}

export default Footer
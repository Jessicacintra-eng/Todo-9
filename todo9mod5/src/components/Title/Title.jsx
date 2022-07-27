import React from 'react'
import styles from './Titulo.module.css'

const Titulo = ({texto}) => {
  return (
    <div className={styles.titulo}>
        <span className={styles.titulo__span}></span>
        <h3 className={styles.titulo__main}>{texto}</h3>
        <span className={styles.titulo__span}></span>
    </div>
  )
}

export default Titulo
import React from 'react';
import s from './Header.module.css';
import Button from '../Button/Button'

const Header = () => {
  const contents = ['Conheça a Linx', 'Ajude o algoritmo', 'Seus produtos', 'Compartilhe'];

  return (
    <header>
      <div className={s.headerBackground}></div>
      <div className={s.headerContent}>
        <h2 className={[s.h2, s.content].join(' ')}>uma seleção de produtos</h2>
        <h1 className={[s.h1, s.content].join(' ')}>especial para você</h1>
        <h3 className={[s.h3, s.content].join(' ')}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
      </div>
      <div className={s.headerButtons}>
        {contents.map((content, index) => (
          <Button key={index} className={s.button} texto={content}/>
        ))}
      </div>
    </header>
  )
}

export default Header
import React, {useState} from 'react'
import Botao from '../Button/Button'
import Titulo from '../Title/Title'
import s from './Share.module.css'

const Share = () => {
  const [Email, setEmail] = useState('')
  function handleInputEmail(target){
    setEmail(target.value)
  }
  function validaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }
  return (
    <div className={s.share}>
        <Titulo texto='Compartilhe a novidade'/>
        <p className={s.share__text}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <form className={s.share__form}>
          <div className={s.field}>
            <label className={s.label} htmlFor="nameFriend">Nome do seu amigo:</label>
            <input type="text" id='nameFriend' name='nameFriend' className={s.inputCaixa}></input>
          </div>
          <div className={s.field}>
            <label className={s.label} htmlFor="emailFriend">E-mail:</label>
            <input type="email" value={Email} onChange={({target})=>handleInputEmail(target)}  className={s.inputCaixa}/>
          </div>
        </form>
        <div className={s.wrappbtn} onClick={(event)=>{
          event.preventDefault()
          validaEmail()
          validaCPF()
          }}>
        <Botao texto='Enviar agora'/>

        </div>
    </div>
  )
}

export default Share
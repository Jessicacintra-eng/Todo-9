import {React, useState} from "react";
import Button from "../Button/Button";
import s from "./Form.module.css";
import { cpf } from 'cpf-cnpj-validator'; 

const Form = () => {
  const [Email, setEmail] = useState('')
  const [CPF, setCPF] = useState('')

  function handleInputEmail(target){
    setEmail(target.value)
  }
  
  function handleInputCPF(target){
    setCPF(target.value)
  }

  function validaEmail(){
    if(Email.indexOf('@') > 3 && Email.indexOf('.com') > Email.indexOf('@')){
      alert("Email Válido")
    }else{
      alert("Email Inválido")
    }
  }

  function validaCPF(){
    if(cpf.isValid(CPF)){
      alert("CPF Válido")
    }else{
      alert("CPF Inválido")
    }
  }


  
  return (
    <form className={s.form}>
      <label htmlFor="name">Seu nome:</label>
      <input
        type="text"
        id="name"
        name="name"
        className={s.inputCaixa}
      ></input>
      <label htmlFor="email">E-mail:</label>
      <input type="email" value={Email} onChange={({target})=>handleInputEmail(target)}  className={s.inputCaixa}/>
      <label htmlFor="cpf">CPF:</label>
      <input type="text" value={CPF} onChange={({target})=>handleInputCPF(target)}  className={s.inputCaixa}/>
      <div className={s.radio}>
        <input
          type="radio"
          id="masc"
          name="gender"
          value="masc"
          className={s.input}
        />
        <label htmlFor="masc" className={s.input}>
          Masculino
        </label>
        <input
          type="radio"
          id="fem"
          name="gender"
          value="fem"
          className={s.input}
        />
        <label htmlFor="fem" className={s.input}>
          Feminino
        </label>
      </div>
      <div className={s.wrappbtn} onClick={(event)=>{
          event.preventDefault()
          validaEmail()
          validaCPF()
          }}>
      <Button  texto="Enviar" />

      </div>
    </form>
  );
};

export default Form;

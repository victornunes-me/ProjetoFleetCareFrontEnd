import React from 'react'


import './login-style.css'
import imgLogoURL from '/logo.png'
import {TextFieldDefault, InputDefault} from '../../components/buttons/buttons'

const labelLogin = {
  label:"email: ",
  placeholder: "email@provedor.com",
};

export default function login() {
  return (
    <div className='bg-login'>
      <section className="login">
        <div className="card">
          <img className="logo" src={imgLogoURL}/>
          <h4>Fazer Login</h4> 
          <form className="formulario">
            <TextFieldDefault email={labelLogin.label} placeholder={labelLogin.placeholder} />
            <InputDefault label={"Avançar"} />
          </form>
        </div>
      </section>  
    </div>
  )
}

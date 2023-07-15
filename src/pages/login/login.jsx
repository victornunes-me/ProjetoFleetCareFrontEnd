import React from 'react'


import './login-style.css'
import {TextFieldDefault, InputDefault} from '../../components/buttons/buttons'

const labelLogin = {
  label:"email: ",
  placeholder: "email@provedor.com",
};

export default function login() {
  return (
      <section className="login">
        <div className="card">
          <img className="logo" src="/logo.png"/>
          <h4>Fazer Login</h4> 
          <form className="formulario">
            <TextFieldDefault email={labelLogin.label} placeholder={labelLogin.placeholder} />
            <InputDefault label={"Avançar"} />
          </form>
        </div>
      </section>
  )
}

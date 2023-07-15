import React from 'react'


import './button-style.css'

 export function TextFieldDefault(props) {
  return (
        <div> 
          <label className="text-label label-default" htmlFor='fname'>{props.email}</label>
          <input className="text-input input-default" alt="email"  placeholder={props.placeholder} id="email"/>
        </div>
  )
}

export function InputDefault(props) {
  return (
          <div onClick={pesquisarEmail} className="bt-primary" type="submit" id="bt-next">
            {props.label}
          </div>
  )
}

function pesquisarEmail(){
 let getEmail = document.querySelector('#bt-next')
 console.log(getEmail)
}



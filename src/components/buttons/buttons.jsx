import React from 'react'
import { Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { theme } from '../../theme';

import './button-style.css'


export function ButtonMuiPrimary(props) {
  const link = props.toLink
  const nome = props.text
  return (
    <Link to={link}>
      <Button variant='contained'>{nome}</Button>
    </Link>
    
  )
}
export function ButtonMuiSecundary(props) {
  const link = props.toLink
  const nome = props.text
  return (
    <Link to={link}>
      <Button variant='outlined'>{nome}</Button>
    </Link>
    
  )
}
export function ButtonMuiTerciary(props) {
  const link = props.toLink
  const nome = props.text
  const color = props.color
  return (
    <Link to={link}>
      <Button variant='text' color={color} >{nome}</Button>
    </Link>
    
  )
}

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



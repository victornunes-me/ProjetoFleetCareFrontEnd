import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import './navbar-style.css'


export default function navbar() {
  return (
  <nav className='navbar' id="menu">
    <Link to='/'>
      Logo
    </Link>
    
    <ul>
      <CustomLink href='/users'>Usuários</CustomLink>
      <CustomLink href='/modal'>Modal</CustomLink>
    </ul>
  </nav>
  )
}

function CustomLink ({href, children, ...props}){
  
  const resolvedPath = useResolvedPath(href)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
    <li className={isActive ? 'active' : ''}> 
    <Link to={href} {...props}>
      {children}
    </Link>
    </li>
  )
}

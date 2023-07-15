import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

import './navbar-style.css'


export default function navbar() {
  return (
  <nav className='navbar font-button' id="menu">
    <Link to='/'>
      <img src='/logo.png' className='icon'/>
    </Link>
    
    <ul>
      <CustomLink href='/users'>Usuários</CustomLink>
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

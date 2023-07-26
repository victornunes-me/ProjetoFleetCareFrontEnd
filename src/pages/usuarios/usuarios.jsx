import React from 'react'

import '../pages.css'
import {useFetchAxios} from '../../hooks/useFetch/'
import Breadcrumber from '../../components/breadcrumber/breadcrumber'

export default function UsuariosPage() {
  const breadcrumberList = {
    "pageName": ["inicio","usuários"],
    "linkURL": ["/ProjetoFleetCareFrontEnd/","/ProjetoFleetCareFrontEnd/usuarios"]
  }

  const {data: repos, isFetching} = useFetchAxios('api/v1/usuario/listar/0')
  //console.log(repos,isFetching)
  return (
  <>
    <section className='content-pages'>    
      <div className='header-pages'>
        <Breadcrumber props={breadcrumberList} />
      </div>
    </section>
    <ul>
      {isFetching && <p>caregando....</p>}
      {!isFetching && repos &&
       repos.map(repo => {
        return(
          <li key={repo.usuarioID}>
            <strong>{repo.nome}</strong>
            <strong>{repo.cpf}</strong>
            <strong>{repo.email}</strong>
          </li>
        )
      })}
    </ul>
  </>
  )
}

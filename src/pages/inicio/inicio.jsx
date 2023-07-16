import React from 'react'
import '../pages.css'
import Table from '../../components/table/table'

//*assim que passa o css para o componente
//const BACKGROUND_STYLE = {
//  backgroundColor: 'rgb(0,0,0,0.7)',
//}

export default function inicio() {
  return (
    <>
    <section className='content-pages'>
      <div className='header-pages'>
        <p className='font-subtitle1 color-customOpacityBlack'>inicio</p>
        <h1 className='font-h3 color-neutralOnSurface'>Boas vindas, Nome</h1>
      </div>
    </section>
    <Table />
    </>
  )
}

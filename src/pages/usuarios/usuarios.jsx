import React from 'react'
import '../pages.css'
import Table from '../../components/table/table'

export default function modal() {
  return (
    <>
    <section className='content-pages'>
      <div className='header-pages'>
        <p className='font-subtitle1 color-primary'>usuários</p>
      </div>
    </section>
    <Table />
    </>
  )
}

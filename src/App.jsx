//react
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


//arquivos
import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//componentes
import Navbar from './components/navbar/navbar'
import Login from './pages/login/login'
import Users from './pages/usuarios/usuarios'
import Inicio from './pages/inicio/inicio'


function App() {
  const [isActiveLogin, setIsActiveLogin] = useState(0)
  

  if (isActiveLogin == 1){
    return (
      <>
      <Login/>
      </>
    )
  }else{
    return (
      <>
      <Navbar />
      <Routes>
        <Route path='/ProjetoFleetCareFrontEnd' element = {<Inicio/>}/>
        <Route path='/ProjetoFleetCareFrontEnd/users' element = {<Users/>}/>
      </Routes>
      </>
    )

  }

}

export default App

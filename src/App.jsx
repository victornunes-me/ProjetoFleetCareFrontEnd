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
import Users from './pages/users/users'
import Home from './pages/home/home'


function App() {
  const [isOn, setisOn] = useState(0)

  if (isOn == 0){
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
        <Route path='/' element = {<Home/>}/>
        <Route path='/users' element = {<Users/>}/>
      </Routes>
      </>
    )

  }

}

export default App

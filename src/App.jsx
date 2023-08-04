//react
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//arquivos
import './App.css'

//componentes
import Navbar from './components/navbar'
import { Box } from '@mui/material'
import { ThemeProvider} from '@mui/material/styles';
import { theme } from './theme'

//pages
import Login from './pages/login'
import Usuarios from './pages/usuarios'
import Inicio from './pages/inicio'
import NotFound from './notFound'
import Usuario from './pages/usuario'


function App() {
  const [isActiveLogin, setIsActiveLogin] = useState(0)

  if (isActiveLogin == 1){
    return (
      <>
      <ThemeProvider theme={theme}>
      <Routes>
        <Route path="*" element={<NotFound/>} />
        <Route path='/ProjetoFleetCareFrontEnd/index.html:inicio' element = {<Login/>}/>
      </Routes>
      </ThemeProvider>
      </>
    )
  }else{
    return (
      <>
      <ThemeProvider theme={theme}>
      
      <Box>
        <Box className='flex' sx={{ position:'sticky' }}><Navbar /></Box>
        <Box className='boxContent'>
            <Routes basename='/ProjetoFleetCareFrontEnd'>
              <Route path="/ProjetoFleetCareFrontEnd/*" element={<NotFound/>} />
              <Route exact path='/ProjetoFleetCareFrontEnd/' element = {<Inicio/>}/>
              <Route exact path='/ProjetoFleetCareFrontEnd/login' element = {<Login/>}/>

              <Route exact path='/ProjetoFleetCareFrontEnd/usuarios' element = {<Usuarios/>}/>
              <Route path='/ProjetoFleetCareFrontEnd/usuario/*' element = {<Usuario/>}/>
              
            </Routes>
        </Box>
        <Box></Box>
      </Box>
      
      </ThemeProvider>
    
      </>
    )

  }

}

export default App

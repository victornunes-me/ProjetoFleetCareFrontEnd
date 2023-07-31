//react
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'


//arquivos
import './App.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

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
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, auto)',
          rowGap: 4,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `
          "header header header header header header header header header header header header"
          ". main main main main main main main main main main ."
          "footer footer footer footer footer footer footer footer footer footer footer footer"`,
          }}
      >
        <Box sx={{ gridArea: 'header',position:'sticky' }}><Navbar /></Box>
        <Box sx={{ gridArea: 'main'}}>
          <Routes>
            <Route path="/ProjetoFleetCareFrontEnd/*" element={<NotFound/>} />

            <Route path='/ProjetoFleetCareFrontEnd/inicio' element = {<Inicio/>}/>
            <Route path='/ProjetoFleetCareFrontEnd/usuarios' element = {<Usuarios/>}/>
            <Route path='/ProjetoFleetCareFrontEnd/login' element = {<Login/>}/>
          </Routes>
        </Box>
        <Box sx={{ gridArea: 'footer'}}></Box>
      </Box>
      
      </ThemeProvider>
    
      </>
    )

  }

}

export default App

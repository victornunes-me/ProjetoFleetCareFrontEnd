//react
import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

//arquivos
import './App.css'

//componentes
import AuthNavbar from './components/authNavbar'
import { Box } from '@mui/material'
import { ThemeProvider} from '@mui/material/styles';
import { theme } from './theme'

//pages
import Login from './pages/login'
import Usuarios from './pages/usuarios'
import Inicio from './pages/inicio'
import NotFound from './notFound'
import Usuario from './pages/usuario'
import { AuthProvider } from './context/AuthProvider'
import { ProtectedLayout } from './components/ProtectedLayout'


function App() {
    return (
      <>
      <AuthProvider>
      <ThemeProvider theme={theme}>
        
      <Box>
        <Routes> 
            //Login e 404 
          <Route exact path='/ProjetoFleetCareFrontEnd/' element = {<Login/>}/>
          <Route path="/ProjetoFleetCareFrontEnd/*" element={<NotFound/>}/>
             
            //inicio 
            <Route exact path='/ProjetoFleetCareFrontEnd/inicio' 
              element = {
              <ProtectedLayout>
                 <Box className='flex' sx={{ position:'sticky' }}><AuthNavbar/></Box>
                  <Box className='boxContent'> <Inicio/></Box>
              </ProtectedLayout>
              }/>

            //Usuarios 
              <Route exact path='/ProjetoFleetCareFrontEnd/usuarios' 
              element = {
              <ProtectedLayout>
                <Box className='flex' sx={{ position:'sticky' }}><AuthNavbar/></Box>
                <Box className='boxContent'>  <Usuarios/> </Box>
              </ProtectedLayout>
              }/>

            //Usuario 
              <Route exact path='/ProjetoFleetCareFrontEnd/usuario/*' 
              element = {
              <ProtectedLayout>
                <Box className='flex' sx={{ position:'sticky' }}><AuthNavbar/></Box>
                <Box className='boxContent'>  <Usuario/> </Box>
              </ProtectedLayout>
              }/>
        </Routes>
      </Box>
      </ThemeProvider>
      </AuthProvider>
      </>
    )

  }
export default App





// //react
// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// //arquivos
// import './App.css'

// //componentes
// import Navbar from './components/navbar'
// import { Box } from '@mui/material'
// import { ThemeProvider} from '@mui/material/styles';
// import { theme } from './theme'

// //pages
// import Login from './pages/login'
// import Usuarios from './pages/usuarios'
// import Inicio from './pages/inicio'
// import NotFound from './notFound'
// import Usuario from './pages/usuario'
// import { AuthProvider } from './context/AuthProvider'


// function App() {
//   const [isActiveLogin, setIsActiveLogin] = useState(0)

//   if (isActiveLogin == 0){
//     return (
//       <>
//       <ThemeProvider theme={theme}>
//       <Routes>
//         <Route path="*" element={<NotFound/>} />
//         <Route path='/ProjetoFleetCareFrontEnd/login' element = {<Login/>}/>
//       </Routes>
//       </ThemeProvider>
//       </>
//     )
//   }else{
//     return (
//       <>
//       <AuthProvider>
//       <ThemeProvider theme={theme}>
      
//       <Box>
//         <Box className='flex' sx={{ position:'sticky' }}><Navbar /></Box>
//         <Box className='boxContent'>
//             <Routes basename='/ProjetoFleetCareFrontEnd'>
//               <Route path="/ProjetoFleetCareFrontEnd/*" element={<NotFound/>} />
//               <Route exact path='/ProjetoFleetCareFrontEnd/' element = {<Inicio/>}/>
//               <Route exact path='/ProjetoFleetCareFrontEnd/login' element = {<Login/>}/>

//               <Route exact path='/ProjetoFleetCareFrontEnd/usuarios' element = {<Usuarios/>}/>
//               <Route path='/ProjetoFleetCareFrontEnd/usuario/*' element = {<Usuario/>}/>
              
//             </Routes>
//         </Box>
//         <Box></Box>
//       </Box>
      
//       </ThemeProvider>
//       </AuthProvider>
//       </>
//     )

//   }

// }

// export default App

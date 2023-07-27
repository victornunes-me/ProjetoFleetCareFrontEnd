import React from 'react'
import Button from '@mui/material/Button';
import { Container, Typography, Box } from '@mui/material';
import { Link} from 'react-router-dom'
import { theme } from '../../theme';
//*assim que passa o css para o componente
//const BACKGROUND_STYLE = {
//  backgroundColor: 'rgb(0,0,0,0.7)',
//}

export default function inicio() {
  return (
    <>
    <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', p:8, gap:2}}>
        <Typography variant='h6' >
          inicio
        </Typography>
        <Typography variant='h3' >
          Boas vindas, Nome
       </Typography>
       <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:"space-between"}}>
        <Link to={'/ProjetoFleetCareFrontEnd/usuarios'}>
              <Typography variant='button' color={theme.palette.primary.main} sx={{p:4}}>Usuários</Typography>
        </Link>
       </Box>
      </Container>
 
        
  
    </>
  )
}

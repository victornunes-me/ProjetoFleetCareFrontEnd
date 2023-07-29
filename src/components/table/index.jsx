import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function tableMui(rows) {
  const data = rows.props
     return (
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 300, }} aria-label="users table">
          <TableHead>
            <TableRow >
              <TableCell><Typography variant='subtitle1'>Usuário</Typography></TableCell>
              <TableCell align="left"><Typography variant='subtitle1'>CPF</Typography></TableCell>
              <TableCell align="left"><Typography variant='subtitle1'>Email</Typography></TableCell>
              <TableCell align="left"><Typography variant='subtitle1'>Telefone</Typography></TableCell>
              <TableCell align="left"><Typography variant='subtitle1'>Status</Typography></TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          {data.map((row) => (
          <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
              <TableCell align="left">{row.cpf}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.whatsapp}</TableCell>
              <TableCell align="left">
                <Chip 
                  label={row.status} 
                  color={(row.status=='ativo') ? 'success': 'error'}  
                />
              </TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
      </TableContainer>
    );
  }


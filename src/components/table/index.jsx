import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function tableMui(rows) {
  const data = rows.props
     return (
      <TableContainer component={Paper} sx={{padding:4}}>
        <Table sx={{ minWidth: 600, }} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>Usuário</TableCell>
              <TableCell align="left">CPF</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Telefone</TableCell>
              <TableCell align="left">Status</TableCell>
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
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
        ))}
        </TableBody>
        </Table>
      </TableContainer>
    );
  }


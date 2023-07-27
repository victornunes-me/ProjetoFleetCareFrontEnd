import * as React from 'react';
import TableMui from '../../components/table/table';
//import {useFetchAxios} from '../../hooks/useFetch/'
//import Breadcrumber from '../../components/breadcrumber/breadcrumber'
const usuarios = [
  {
    "usuarioID": "54e95cbd-2e52-4180-9415-bf90ef23240d",
    "cpf": "987.444.555-77",
    "nome": "Joaquim Joseh da Silva",
    "email": "joaquim22@gmail.com",
    "whatsapp": "(98)8.8877-66",
    "dataNascimento": "",
    "sexo": "",
    "ativo": true,
    "password": "$2a$10$hL9r4sO9Uctw5dzjYSsG.e6uPEJ4xlLHvlCfEEq.5zWD61o41eJ6K",
    "versao": 2,
    "cleanCPF": "98744455577"
  },
  {
    "usuarioID": "74ff46b6-4471-4e92-83fd-6221c358385b",
    "cpf": "000.444.555-88",
    "nome": "Murilo Msx 2022",
    "email": "smurilo@gmail.com",
    "whatsapp": "(98)8.8877-77",
    "dataNascimento": "",
    "sexo": "",
    "ativo": true,
    "password": "$2a$10$M.rkapQBt0YaexqW.8ZuVefa9DB9ctLirSLpOkgSZwL1tHRqVWwmC",
    "versao": 0,
    "cleanCPF": "00044455588"
  },
  {
    "usuarioID": "7664e069-e666-4cd6-9a97-d7d4c9268469",
    "cpf": "222.444.555-88",
    "nome": "Ana Cristina",
    "email": "anaacm@gmail.com",
    "whatsapp": "(95)5.5577-77",
    "dataNascimento": "14/04/1982",
    "sexo": "",
    "ativo": false,
    "password": "$2a$10$lFYCt2vs9wIMZgFoMyt62O4sYvfs3oJf2FyDLrmtI8T1Jfk8.0cmi",
    "versao": 0,
    "cleanCPF": "22244455588"
  }
]
function createData(name, cpf, email, whatsapp, status) {
  if (status === true){
    status= "ativo"
    return { name, cpf, email, whatsapp, status };
  }else{
    status= "inativo"
    return { name, cpf, email, whatsapp, status };
  }
  
}


  //createData('Teste', "000.444.555-88", "anaacm@gmail.com", "(95)5.5577-77", "ativo"),
  const size = usuarios.length
  const rows = [];
  //console.log(size,usuarios[0].ativo);

  for (var i = 0; i < size; i++) {
      rows.push(createData(usuarios[i].nome, usuarios[i].cpf, usuarios[i].email, usuarios[i].whatsapp,usuarios[i].ativo))
      console.log(rows,i)
  } 

export default function UsuariosPage() {
  return(
    <TableMui props={rows}/>
  )}


 // const {data: repos, isFetching} = useFetchAxios('api/v1/usuario/listar/0')
  // console.log(repos,isFetching)
  // return (
  // <>
  //   { <ul>
  //     {isFetching && <p>caregando....</p>}
  //     {!isFetching && repos &&
  //      repos.map(repo => {
  //       return(
  //         <li key={repo.usuarioID}>
  //           <strong>{repo.nome}</strong>
  //           <strong>{repo.cpf}</strong>
  //           <strong>{repo.email}</strong>
  //         </li>
  //       )
  //     })}
  //   </ul> 
  //   }
  // </>)
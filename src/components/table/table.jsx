import React, { useState, useEffect  } from 'react';
import axios from 'axios';

const baseURL = import.meta.env.VITE_REACT_API_BASE_URL_PROD
const resquestURL = baseURL.concat("api/v1/usuario/listar/1")
export default function table() {
  const [users, setUsers] = React.useState(null);
  
    React.useEffect(() => {
      axios.get(resquestURL).then((response) => {
        setUsers(response.data);
      });
    }, []);

     return (
      console.log(users)
    );
}


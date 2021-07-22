//@ts-nocheck
import { useState } from 'react';
import { buscarUsuario } from '../service/github.service';

export const Github = () => {
  const [usuario, setUsuario] = useState('');
  const [dados, setDados] = useState(null);

  const handleUsuarioChanges = (event) => {
    setUsuario(event.target.value)
  }

  const handleBuscar = () => {
    buscarUsuario(usuario)
      .then(dados => setDados(dados));
  }

  return (
    <div>
      <p>Github User</p>
      <label htmlFor="usuario">Usuario:</label>
      <input
        type="text"
        name="usuaraio"
        value={usuario}
        onChange={handleUsuarioChanges}
      />
      <button onClick={handleBuscar}>Buscar</button>

      {dados !== null && <p>Login: {dados.login}</p>}
    </div>
  )
}
import { useState, FC } from 'react';
import { buscarUsuario } from '../service/github.service';

export const Github: FC = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [dados, setDados] = useState<{login: string} | null>(null);

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
import axios from 'axios';

interface IGithub {
  login: string,
}

export function buscarUsuario(usuario): Promise<Readonly<IGithub>> {
  return axios
    .get(`https://api.github.com/users/${usuario}`)
    .then((res) => res.data);
}

buscarUsuario('').then(value => {
  const copia = {...value};
  copia.login = value.login.toLowerCase();
})
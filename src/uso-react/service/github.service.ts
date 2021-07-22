import axios from 'axios';

export function buscarUsuario(usuario) {
  return axios
    .get(`https://api.github.com/users/${usuario}`)
    .then((res) => res.data);
}
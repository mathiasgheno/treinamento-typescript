export function trocarPontoPorVirgula(valor, paraTodos) {
  if(paraTodos === false) {
    return valor.replace('.', ',');
  }
  return valor.replaceAll('.', ',')
}

export const pessoa = {
  nome: 'mathias gheno',
  idade: 25,
  profissoes: ['desenvolvedor', 'dj'],
};
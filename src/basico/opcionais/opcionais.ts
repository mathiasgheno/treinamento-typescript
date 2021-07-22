export function trocarPontoPorVirgula(valor: string, paraTodos?: boolean): string {
  if(paraTodos === false) {
    return valor.replace('.', ',');
  }
  return valor.replaceAll('.', ',')
}

// null ?? console.log('');
// '' && console.log('');
// objeto?.qqCoisa;

trocarPontoPorVirgula('1,000,000.00');
trocarPontoPorVirgula('1,000,000.00', true);

interface IPessoa {
  nome: string,
  idade: number,
  profissoes?: string[],
}

export const pessoa: IPessoa = {
  nome: 'mathias gheno',
  idade: 25,
};

type Profissioes = 'desenvolvedor' | 'dj';

type Pessoa = {
  readonly nome: string;
  idade: number;
  profissoes: Profissioes[];
}

export const pessoa: Pessoa = {
  nome: 'mathias gheno',
  idade: 25,
  profissoes: ['desenvolvedor'],
};
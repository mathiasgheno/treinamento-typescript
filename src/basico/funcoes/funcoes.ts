export const fn0 = function (valor: string = ''): string {
  return 'fn0'
}

export function fn1(): string {
  return 'fn1';
}

export const fn2 = (): string => {
  return 'fn2';
}

export function fn3(): string {

  function closure(): string {
    return '';
  }

  return closure();
}

export class Funcoes {
  static fn4(): string {
    return 'fn4';
  }
}

export const objeto = {
  fn5(): string {
    return 'fn5';
  }
}

interface IRetorno {
  fn6(): string,
}

const obj: IRetorno = {
  fn6() {
    return '';
  }
}



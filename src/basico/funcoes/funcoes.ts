export const fn0 = function () {
  return 'fn1'
}

export function fn1() {
  return 'fn1';
}

export const fn2 = () => {
  return 'fn2';
}

export function fn3() {

  function closure() {
    return '';
  }

  return closure();
}

export class Funcoes {
  static fn4() {
    return 'fn4';
  }
}

export const objeto = {
  fn5() {
    return 'fn5';
  }
}

interface IRetorno {
  fn6: any,
}



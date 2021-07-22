type Resultado = {
  age: number | null,
}

export function addPropAge<O>(obj: O) {
  Object.defineProperty(obj, 'age', {
    value: null,
  });
  return obj as O & Resultado;
}

interface Pessoa {
  nome: string,
}

interface Cidade {
  cidade: string,
}

const resultado = addPropAge<Pessoa>({nome: 'mathias'});

const cidade = addPropAge<Cidade>({cidade: 'ny'});


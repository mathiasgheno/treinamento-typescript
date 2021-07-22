export function addPropAge(obj) {
  Object.defineProperty(obj, 'age', {
    value: null,
  });
  return obj
}

const resultado = addPropAge({nome: 'mathias'});

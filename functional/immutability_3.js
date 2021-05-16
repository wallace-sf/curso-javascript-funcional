const { cloneDeep } = require("lodash");

const person = {
  name: "Maria",
  height: 1.76,
  city: "São Paulo",
  end: {
    rua: "XV de novembro",
  },
};

// Passagem por referência
const setPersonValuesShallow = (p) => {
  // clone raso (apenas do primeiro nível)
  const newPerson = { ...p };

  newPerson.name = "João";
  newPerson.city = "Fortaleza";
  newPerson.end.rua = "Avenida Brasil";

  return newPerson;
};

// Passagem por referência
// Função  impura
const setPersonValuesDeep = (p) => {
  const newPerson = cloneDeep(p);

  newPerson.name = "João";
  newPerson.city = "Fortaleza";
  newPerson.end.rua = "Avenida Brasil";

  return newPerson;
};

// Atribuição por referência
// const cpPerson = person;
// const newPersonShallow = setPersonValuesShallow(cpPerson);

// console.log(person);
// console.log(cpPerson);
// console.log(newPersonShallow);

// Atribuição por referência
const cpPerson = person;
const newPersonDeep = setPersonValuesDeep(cpPerson);

console.log(person);
console.log(cpPerson);
console.log(newPersonDeep);

let a = 3;
let b = a; // atribuição por valor

a++;
b--;

console.log(a, b);

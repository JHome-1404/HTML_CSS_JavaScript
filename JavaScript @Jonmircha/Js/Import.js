export const PI = Math.PI;

export let usuario = "Jhon";
export let password = "Jhon_123";

// export function sumar(a, b) {
//   return a + b;
// }

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

export const aritmetica = {
  sumar,
  restar,
  multiplicar(a, b) {
    return a * b;
  },
};

//? Solo puede haber una exportacion por defecto
export default function saludar(persona) {
  console.log(`Hello ${persona} nice to meet you =)`);
}

// ? para exportar variables default primero definir variable luego exportarla
// let variable_default = "Hello World";
// export default variable_default;

export class Saludar {
  hi(nombre) {
    console.log(`Hi ${nombre} what's up?`);
  }
}

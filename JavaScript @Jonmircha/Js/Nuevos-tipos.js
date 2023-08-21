// ## NUEVOS TIPOS DE DATOS
// ? Implementados despues de Ecmascript6

// # SYMBOLS
// ? Una vez declarado no puede ser modificado (identificador unico en objetos)(Atributos Privados)
const id = Symbol("id");
const id2 = Symbol("id");
console.log(id, id2);
console.log(typeof id, typeof id2);
console.log(id === id2);

const NAME = Symbol("Nombre");
const SALUDAR = Symbol("Saludar");
const Jhon = {
  [NAME]: "Jhon",
  edad: 35,
};

// ? Propieda privada
console.log(Jhon);
Jhon.NAME = "JHON";
console.log(Jhon);

console.log(Jhon.NAME);
console.log(Jhon[NAME]);

Jhon[SALUDAR] = function () {
  console.log("Hi Developer");
};
console.log(Jhon);
Jhon[SALUDAR]();

// ? No aparecen los Simbolos
for (const property in Jhon) {
  console.log(property);
  console.log(Jhon[property]);
}

console.log(Object.getOwnPropertySymbols(Jhon));

// ! Borrando Consola
console.clear();

// # SETS
// ? Eliminar los elementos repetidos en un arreglo, es como un arreglo pero no es arreglo
const set = new Set([1, 3, 3, 4, 5, true, false, true, {}, {}, "hola", "HOLA", "hola"]);
console.log(set);
console.log(set.size);

const set_2 = new Set();
set_2.add(1);
set_2.add(3);
set_2.add(3);
set_2.add(4);
console.log(set_2);

console.log(set[0]);
let array_set = Array.from(set);
console.log(array_set[0]);

set.delete("hola");
console.log(set);

// ? Validar si un dato existe en un set
console.log(set.has("HOLA"));
console.log(set.has("hola"));

set_2.clear();
console.log(set_2);

// ! Borrando Consola
console.clear();

// # MAPS
// ? Valores iterables
const mapa = new Map();
mapa.set("nombre", "Jesus");
mapa.set("apellido", "Home");
mapa.set("edad", 18);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Jesús");
console.log(mapa.get("nombre"));
mapa.delete("edad");
console.log(mapa);

// ! Borrando Consola
console.clear();

// # WEAKSETS & WEAKMAPS
const ws = new WeakSet();
let valor1 = { Valor1: 1 };
let valor2 = { Valor2: 2 };
let valor3 = { Valor3: 3 };

ws.add(valor1);
ws.add(valor2);
console.log(ws.has(valor1));
console.log(ws.has(valor3));

console.log(ws);

const wm = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
console.log(wm);

// ! Borrando Consola
console.clear();

// # ITERABLES & ITERADORES
const iterable = [1, 2, 3, 4, 5];
const iterador = iterable[Symbol.iterator]();
console.log(iterable);
console.log(iterador);

// ! MAL
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// $ MEJOR
let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}

// ! Borrando Consola
console.clear();

// # GENERATORS
// ? Asincronica no bloqueante(se ejecuta varias lienas de codigo no bloqueando las otras)
function* fn_iterable() {
  // ? Es como un return
  yield "Hola";
  console.log("Hello Developer");
  yield "Hola_2";
  console.log("Coding...");
  yield "Hola_3";
}

let iterador_2 = fn_iterable();
// console.log(iterador_2.next());
// console.log(iterador_2.next());

for (const y of iterador_2) {
  console.log(y);
}

const arr = [...fn_iterable()];
console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, 2000);
}

function* generator() {
  console.log("Iniciar Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  console.log("Fin Generator");
}

// let gen = generator();
// for (const y of gen) {
//   console.log(y);
// }

// ! Borrando Consola
console.clear();

// # PROXIES
// ? Crear un objeto basado en un objeto litetal inicial

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  // $ Validacion
  set(obj, prop, valor) {
    // $ Evaluar en la lista del objeto exista la propiedad
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(`La propiedad ${prop} NO existe en el objeto persona`);
    }
    obj[prop] = valor;
  },
};

// ? EL proxy funciona como una copia de persona, manteniendo vincualacion directa con el objeto
const jhon = new Proxy(persona, manejador);
console.log(jhon);
jhon.nombre = "Jhon";
jhon.apellido = "Stiven";
jhon.edad = 35;
// jhon.correo = "Jhonstiven@example.com";
console.log(jhon);
console.log(persona);

// ! Borrando Consola
console.clear();

// # PROPIEDADES DINAMICAS DEL LOS OBJETOS
// ? Creando sistema de registro dinamico

let aleatorio = Math.round(Math.random() * 100 + 5);

const objUsuario = {
  // $ Propiedad Dinamica [...]:
  // [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor Aleatorio",
  [`id_${aleatorio}`]: "Valor Aleatorio",
};
console.log(objUsuario);

const usuarios = ["Jhon", "Robin", "Darian", "Miguel"];
usuarios.forEach((usuario, index) => {
  objUsuario[`id_${index}`] = usuario;
});

console.dir(objUsuario);

// ! Borrando Consola
console.clear();

// # THIS
// ? This toma la variable dependiendo del contexto
console.log(this);

this.nombre = "Contexto Global";
function imprimir() {
  console.log(this.nombre);
}
imprimir();

const obj = {
  nombre: "Contexto Objeto",
  imprimir() {
    console.log(this.nombre);
  },
};
obj.imprimir();

const obj2 = {
  nombre: "Contexto Objeto2",
  imprimir: imprimir,
};

obj2.imprimir();

const obj3 = {
  nombre: "Contexto Objeto3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

// !IMPORTANTE = Las funciones normales manejan su propio scope {...} pero las funciones anonimas no lo manejan

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  retonar() {
    console.log(this.nombre);
  }
}

let dan = new Persona("Dan");
dan.retonar();

// ! Borrando Consola
console.clear();

// # CALL, APPLY & BIND
// ? Llamar, aplicar, enlasar
this.lugar = "Contexto Global";

function saludar(saludo, quien) {
  console.log(`${saludo} ${quien}, desde el ${this.lugar}`);
}

const obj4 = {
  lugar: "Contexto Objeto",
};

saludar("Hola", "Usuario");
// saludar.call(null, "Hola", "Usuario2");
// saludar.call(this, "Hola", "Usuario2");
saludar.call(obj4, "Hola", "Usuario2");
saludar.apply(obj4, ["Hola", "Usuario3"]);

const persona_2 = {
  nombre: "Jesus",
  // saludar: () => {
  //   console.log(`Hola ${this.nombre}`);
  // },
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona_2.saludar();

const otrapersona = {
  // saludar: persona_2.saludar,
  // saludar: persona_2.saludar.bind(this),
  saludar: persona_2.saludar.bind(persona_2),
};

otrapersona.saludar();

// ! Borrando Consola
console.clear();

// # JSON (JAVASCRIPT OBJECT NOTATION)
// ? Es como un traductor o compilador de un lenguaje a otro, permite compartir informacion

console.log(JSON);
console.log(JSON.parse("35"));
console.log(JSON.parse(`{"x":1,"y":2}`));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse(2 * 3));

console.log(JSON.stringify(35));
console.log(JSON.stringify({ x: 1, y: 2 }));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(2 * 3));

let json = JSON.parse(`
  {
    "nombre": "Jesus",
    "apellido": "Home",
    "edad": 18,
    "Soltero": true,
    "Lenguajes": ["JavaScript", "Python", "SQL", "PHP"],
    "redes": {
      "example": "jesushome@example.com"
    }
  }
  `);

console.log(json);

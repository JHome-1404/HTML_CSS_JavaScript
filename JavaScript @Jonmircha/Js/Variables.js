// # VARIABLES
// Todas las funciones o variables que se encuentren en un mismo documento y manera global no se pueden repetir su nombre

// # VARIABLE GLOBAL
// Estas variables se repiten a lo largo de todo el codigo, se elevan (hosting)
var hello = "Hello World";
console.log(hello);

// # VARIABLE BLOQUE (LOCALES)
// Estas variables se destruyen despues de salir de un bloque
let hola = "Hola Mundo";
// Utilizar let es mejor para declarar variables volatiles que se pueden destruir y modificar luegos de  funciones o clses

console.log(window);
console.log(window.hola);
console.log(window.hello);

// # EJEMPLO
// * MAL
var musica = "Rock";
console.log("Variable antes del bloque:", musica);
{
  var musica = "Pop";
  console.log("Variable dentro del bloque:", musica);
}
console.log("Variable antes del bloque:", musica);

// * MEJOR
let musica_2 = "Rock";
console.log("Variable antes del bloque:", musica_2);
{
  let musica_2 = "Pop";
  console.log("Variable dentro del bloque:", musica_2);
}
console.log("Variable antes del bloque:", musica_2);

// # CONSTANTES
// Constantes siempre con valor, valores que no se pueden modificar, pero con datos compuestos si se puede, ya que su dato no se modifica, se modifica su referencia

// Tip: A los datos compuestos pueden o no ser modificados su valor, jugando con esto se pueden editar o eliminar estos

const PI = 3.14;
// ! No Sirve
// PI = 3.15;
console.log(PI);

// Objetos
const objeto = {
  nombre: "Jesus",
  edad: "18",
};

// Arreglo
const colores = ["blanco", "negro", "azul"];
objeto.correo = "jesushome1404@gmail.com";
colores.push("anaranjando");

console.log(objeto);
console.log(colores);

// # STRINGS
let nombre = "Jesus";
let apellido = "Home";
let lorem =
  "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate autem placeat a quae! Fugit, voluptatum! Suscipit perspiciatis reiciendis, minima nam minus dolores dolore quo velit tempora, iure harum dolor!   ";

console.log(nombre, apellido);
console.log(
  // Aceceso a elementos
  nombre.length,
  apellido.length,
  // Mayusculas
  nombre.toUpperCase(),
  // Minusculas
  apellido.toLowerCase(),
  // Si incluye o no
  lorem.includes("amet"),
  lorem.includes("jesus")
);
console.log(lorem);
// Eliminacion espacios en blnaco
console.log(lorem.trim());
console.log(lorem.split(","));

// # CONCATENACION Y INTERPOLACION
// * Concatenar: Unir cadenas de textos
let saludo = "Hola mi nombre es " + nombre + " " + apellido;
console.log(saludo);

// * Interpolacion: Meter dentro de una cadena de texto el valor de una variables (``)
// Template Strings
let saludo_2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo_2);

// Consejo: Tener siempre en cuenta las comas que pones, "" para concatenar, `` para interpolacion

// # Manejo del DOM
let ul = `
<ul>
  <li>Objeto1</li>
  <li>Objeto2</li>
  <li>Objeto3</li>
  <li>Objeto4</li>
</ul>`;
console.log(ul);

// # NUMBERS
let a = 2;
let c = 7.19;
let d = "5.6";

console.log(a);
// Redondear Numeros
console.log(c.toFixed(1));
// Convierte a numero entero
console.log(parseInt(c));
// Convierte a flotante
console.log(parseFloat(c));
// Tipo de dato
console.log(typeof c, typeof d);
console.log(c + d);
// Casting
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

// # BOOLEANS
let verdadero = true;
let falso = false;

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);
console.log(Boolean(0));
console.log(Boolean(1));

// # NUll, UNDEFINED & NaN
// Ambos espacios son vacios e indefinidos
// Asignado por el computador
let indefinida;
console.log(indefinida);

// Asignado por el programador
let nulo = null;
console.log(nulo);

// NaN para operaciones que no contienen numeros
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);

// # FUNCIONES
//  Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.
// Las funciones en JavaScript son objetos, un tipo especial de objetos:
// Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.

// * Funcion Declarada
function estoEsUnaFuncion() {
  console.log("1");
  console.log("2");
  console.log("3");
}

// * Funcion Invocada
estoEsUnaFuncion();

// * Funcion que Devuelve o retorna valores
function estoEsOtroFuncion() {
  console.log("4");
  console.log("5");
  console.log("6");
  // La funcion
  return "Hello World";
}

// Siempre que uses funciones en variables usar las ()
let valorDeFuncion = estoEsOtroFuncion();
console.log(valorDeFuncion);

// Puedes modificar los valores por defecto, evita errores
function saludar(nombre = "Desconocido", edad = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludar("Home", 17);
saludar();

// # FUNCIONES DECLARAS VS FUNCIONES EXPRESADAS

// Cuando una funcion es declara se eleva a nivel global  y pude invocarse antes o despues de esta declaracion, puede reutilizarse atraves de todo el codigo

// Declarada
funcionDeclarada();

// Declarar
function funcionDeclarada() {
  console.log(
    "Esto es una Funcion Declarada, puede en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declara"
  );
}

// Invocar
funcionDeclarada();

// Expresada
// Estas funciones respetan el flujo de cascada del codigo y se pueden crear a base en un condicional o una variable, se le asigna el valor de una funcion a una variable, evita errores de copilacion

// Para estas funciones se acostumbra usar const
// ! Vota error
// funcionExpresada();

const funcionExpresada = function () {
  console.log("Esto es una funcion expresada");
};

funcionExpresada();

// Arrow funcion, tema para mas adelante (Nuevo)
// const funcionExpresada = () => {};

// # ARREGLOS
// Coleccion de datos almacenados en una variable(Como una tabla de datos)
// Para declarar arreglos y objetos se recomienda usar const

const y = [];
const z = [1, true, "Hola", ["a", "b", "c", [1, 2, 3]]];
console.log(z);
console.log(z.length);
// Matrices
console.log(z[3][3][0]);
// Mejor perspectiva
console.table(z);
console.table(z[3]);

// Comando como emmet para areglos grandes con valores repetitivos
// Focus en fill para su sintaxis valor + start + end
// Fill rellena valores
// const l = Array(21).fill(false);
const l = Array(11).fill(1, 0, 4);
console.table(l);

const colors = ["Rojo", "Amarillo", "Azul", "verde"];

// Push añade un nuevo elemento al final del arreglo
colors.push("Negro");
console.table(colors);

// pop elimina el ultimo elemento
colors.pop("Negro");
console.table(colors);

// ForEach ejecuta la función indicada una vez por cada elemento del array.
colors.forEach(function (el, index) {
  console.log(`<li id="${index}">${el}</li>`);
});

// # OBJETOS
// En JavaScript todo es un objeto, y se utiliza const para evitar modificaciones en los objetos

const h = {};
console.log(h);

const persona = {
  nombre: "Jesus",
  apellido: "Home",
  edad: "18",
  sexo: "Masculino",
  pasatiempos: ["Jugar Genshin", "Programar", "Leer Libros", "Mirar Anime"],
  soltero: true,
  contactos: {
    email: "jesushome1404@gmail.com",
    movil: "3228173640",
  },
  mensaje: function () {
    console.log("Hola :)");
  },
  decirMiNombre: function () {
    console.log(`Hola Programador Mi Nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
  },
};

console.log(persona);

// ! Esta funcion para codigo Fibonacci +Extra
function fibonacci(numb) {
  const fib = [0, 1];
  for (let i = 2; 2 <= numb; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    numb = numb - 1;
    console.log(fib[i].join());
  }
}

// fibonacci(8);

// No muy utilizada
console.log(persona["nombre"]);
console.log(persona["apellido"]);

// dentro de una funcion, a las variables se le llaman atributos o propiedades y las funciones, metodos

// Muy utilizada
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.soltero);
// Para Arreglos
console.log(persona.pasatiempos[0]);
// Para Objetos
console.log(persona.contactos.email);
// Para Funciones
persona.mensaje();
// This hace referencias en donde se encuentre
persona.decirMiNombre();

// * METODOS
// las llaves de los objetos
console.log(Object.keys(persona));
console.log(Object.values(persona));
// Verfifica que las llaves tengan valores
console.log(persona.hasOwnProperty("nombre"));
console.log(persona.hasOwnProperty("nacimiento"));

// # TIPOS DE OPERADORES
// * Aritmeticos + - * / % ()
let i = 5 + 5 - 10 * 3;
console.log(i);
// Residuo de una division
let modulo = 5 % 2;
console.log(modulo);

// * Relacionales > < >= <= = == === ! != !==
console.log(8 > 9);
console.log(8 <= 9);
console.log(8 >= 9);
// = asignacion de variables, == comparacion de valores, === comparacion de tipo de dato y de valor
console.log(7 == 7);
console.log("7" == 7); //true
console.log("7" === 7); //false

// * Incremento & Decremento
let t = 1;
t = t + 1;
// Shorthand
t += 1;
t /= 1;
// console.log(t);

// * Operador Unario
// De uno en uno
i = i + 1;
// Shorthand
i++;
i--;
++i;
--i;

let e = 2;
console.log(e);
// Aumenta en uno - Imprime y luego Suma
console.log(e++);
console.log(e);
// Aumenta en uno - Suma y Luego Imprime
console.log(++e);

// * Operador Logicos
// Not ! Or || And &&
console.log(!false);
console.log(!true);
console.log(9 === 9 || "9" === 9);
console.log(9 === 9 && "9" === 9);

// # CONDICIONALES

// Una condicion
let anime = true;
if (anime === true) {
  console.log("Eres un otaku, Bañate🤮");
} else {
  console.log("Sigues Siendo Otaku");
}

// Dos condicion
let edad = 18;
if (edad >= 18) {
  console.log("Eres Mayor de Edad");
} else if (edad >= 10) {
  console.log("Eres un Adolecente");
} else {
  console.log("Eres un Pelao");
}

// $ Operador Ternario
// ! No Sirve (Formateador) pero su Sintaxis es asi
// let vesAnime = (anime === true) ? "🧐🍷" : "Que esperas para Ver";
// console.log(vesAnime());

let comidaFavorita = "hamburguesa";
switch (comidaFavorita) {
  case "hamburguesa":
    console.log("😋🍔");
    break;
  case "pizza":
    console.log("😋🍕");
    break;
  default:
    console.log("Vete");
    break;
}

// # CICLOS
let contador = 0;

//  * While
// Condicion y luego Operacion
while (contador <= 10) {
  console.log("While", contador);
  contador++;
}

// * Do While
// Operacion y Luego Condicion
do {
  console.log("Do While", contador);
  contador++;
} while (contador <= 10);

// * For
for (let i = 0; i <= 10; i++) {
  console.log("For", i);
}

// $ For en Arrays
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// $ For of
// Par elemetos iterables (que se puedan partir)
for (const i of numeros) {
  console.log("For of:", i);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
  console.log(caracter);
}

// $ For en Objetoos (For in)
// recorrer objetos especificamente
for (const key in persona) {
  console.log(`Key: ${key}, Value ${persona[key]}`);
}

// # MANEJO DE ERRORES
// catch no se ejecuta hasta que se encuentre un error en en try
try {
  console.log("En el Try se agrega el codigo a evaluar");
  noExiste;
  console.log("Segundo Mensaje");
} catch (error) {
  console.log("Catch Captura cualquier error surgido en el try");
  console.log(error);
} finally {
  console.log("El bloque finally se ejecutara siempre al final de un bloque try catch");
}
// Mensajes de errores personalizados

try {
  let numero = "y";
  if (isNaN(numero)) {
    throw new Error("El caracter introducido no es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log(`Se produjo el siguiente Error: ${error}`);
}

// # BREAK & CONTINUE
// Break & Continue sirven para estructuras de control

// Brek es salirse de la ejecucion del ciclo, y volver en donde  esta el contenedor padre
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numero.length; i++) {
  if (i === 5) {
    break;
  }
  console.log(numero[i]);
}

// Continue continua con la ejecucion del codigo saltando la itereacion  de los condicionales
for (let i = 0; i < numero.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(numero[i]);
}

// # DESTRUCTURACION
// es una forma de asignarle valores a arreglos o a objetos de manera mas eficiente

let aregloD = [1, 2, 3];

// * Sin Destructuracion
let uno = aregloD[0];
let dos = aregloD[1];
let tres = aregloD[2];
console.log(uno, dos, tres);

// * Con Destructuracion
// Agrega indices al arreglo
const [one, two, three] = aregloD;
console.log(one, two, three);

let personaD = {
  nombreD: "Jesus",
  apellidoD: "Home",
  edadD: "18",
};

// Busca Valores con Mismo Nombre
let { nombreD, apellidoD, edadD } = personaD;
console.log(nombreD, apellidoD, edadD);

// ! IMPORTANTE: Colocar el mismo nombre si quieres aislar un valor a una variable

// # OBJETOS LITERALES (ES6)
// tema explicito de ecmascript ES6

let nameT = "Toby";
edadT = 8;

const perro = {
  // Atributos
  nombre: nameT,
  edad: edadT,
  // Metodos
  ladrar: function () {
    console.log("🐺");
  },
};

console.log(perro);
perro.ladrar();

const dog = {
  nameT,
  edadT,
  ladrar() {
    console.log("Guauu Guauu");
  },
};

console.log(dog);
dog.ladrar();
// funciona explicitame si son del mismo nombre

// # PARAMETROS REST & OPERADORES SPREAD

// * Rest
// Sirve para añadir datos no explicitos, pero que pueden implementarse a lo largo del codigo, empaqueta todos los demas datos en una array
function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));
console.log(sumar(1, 2, 3, 4, 5, 6));

// ! Mal
const mostrarDatos = (nombre, edad, correo) => {
  console.log(nombre, edad, correo);
};

mostrarDatos("Jesus", 17, "correo1244@gmail.com");

// $ Mejor
const mostrarDatosm = (...datos) => {
  console.log(datos);
  for (let i = 0; i < datos.length; i++) {
    const answer = datos[i];
    console.log(answer);
  }
};

// Bota en arreglo
mostrarDatosm("Jesus", 17, "correo1244@gmail.com");

// * Spread
// Es un operador que simplifica la recogida de valores en una estructura de datos. Convierte un array o un objeto en el conjunto de valores que contiene.

const arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 0];

// ! Mal
console.log(arr1, arr2);
// const arr3 = [arr1 + arr2];

// $ Mejor
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const letters = ["a", "b", "c"];
const words = ["car", "dog", "horse"];
const lettersAndWords = [...letters, ...words];
console.log(lettersAndWords);

// Resumen: Encoje todos lo datos de muchas variables en una sola

// # ARROW FUNCTIONS
// se utilizan en cualquier situación en la que se requiera una  sintaxis más breve y concisa, funciones anonimas.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

const helloA = (nombre) => {
  console.log(`Hello ${nombre}`);
};

helloA("Home");

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionDeVariasLineas();

// ! Importate Repaso foreach
// Sintaxis: Object.forEach() Object.map()

// ? For each y map se usa para realizar una operacion por cada elemento que encuentre en un arreglo
const myarray = [1, 2, 3, 4, 5];

myarray.forEach((x) => {
  // console.log(x);
});

myarray.map((x) => {
  // console.log(x);
});

// for each No permite guardar estas operaciones en un nuevo arreglo
const res01 = myarray.forEach((x) => x * 5);
console.log(res01);

// map() Si permite guardar estas operaciones en un nuevo arreglo
const res02 = myarray.map((x) => x * 5);
console.log(res02);

// Links: https://www.youtube.com/watch?v=1R3hlqUMmk8

// * siguiendo leccion

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((e, index) => {
  console.log(`${e} esta en la posicion ${index} `);
});

function esto() {
  console.log(this);
}

esto();

const funcionthis = {
  nombre: "kenai",
  accion1() {
    console.log(this.nombre);
  },
  accion2: () => {
    console.log(this);
  },
};

funcionthis.accion1();
funcionthis.accion2();

// las arrow funcion capturan el entorno global en donde se encuetren, se recomienda usar funciones normales en objetos que captura el entorno padre

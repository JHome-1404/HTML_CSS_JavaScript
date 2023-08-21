//## POO
// Clases = modelo a seguir
// Objetos = es una instacia de una clase
// Atributos = es una caracteristica o propiedades de un objeto (variables dentro de un objeto )
// Metodos = son las acciones que realiza un objeto (funciones dentro de un objeto)

const persona = {
  nombre: "Bot",
  saludar() {
    console.log(`Hello ${this.nombre}`);
  },
};

console.log(persona);

//# PROTOTIPOS
// Son para crear propiedades y metodos para reutilizar en nuevos objetos, actualmente es mejor usar clases
//* Funcion Constructora
function construir(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
  // Metodos
  this.saludar = function () {
    console.log(`Hello my name is ${this.nombre}`);
  };
}

const snoopy = new construir("Snoopy", "Macho");
console.log(snoopy);
snoopy.saludar();

// Agrengando metodos al prototipo no a la funcion como tal (evita clonacion de metodos)
function construir_2(nombre, genero) {
  // Atributos
  this.nombre = nombre;
  this.genero = genero;
}

// Metodos
construir_2.prototype.saludar = function () {
  console.log(`Hello my name is ${this.nombre}`);
};

// Crear Objeto
const snoopy_2 = new construir_2("Snoopy", "Macho");

console.log(snoopy_2);
snoopy_2.saludar();

// # HERENCIA PROTOTIPICA
// Prototipo
function bot(nombre, genero, inteligencia) {
  this.super = construir_2;
  this.super(nombre, genero);
  this.inteligencia = inteligencia;
}

// Herencia
bot.prototype = new construir_2();
bot.prototype.constructor = bot;

// Metodos Nuevos
bot.prototype.saludar = function () {
  console.log(`Hello user my name is ${this.nombre}`);
};

bot.prototype.inteligencia = function () {
  console.log(`Hello user my intelligence is ${this.inteligencia}`);
};

// Crear Objeto
const bot_user = new bot("Carl", "NaN", "Indefenida");

console.log(bot_user);
bot_user.saludar();

// # CLASES Y HERENCIA
//* Clases
// JavaScript sigue interpretado las clases en prototipos
// Clase
class person {
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre;
    this.genero = genero;
  }
  // Metodos
  saludar() {
    console.log(`Hello my name is ${this.nombre}`);
  }
  orientacion() {
    console.log(`Hello, I'm a ${this.genero}`);
  }
}

// Objeto
const dan = new person("Dan", "Boy");
const siri = new person("Siri", "Girl");

console.log(dan);
dan.saludar();
console.log(siri);
siri.saludar();

// * Herencia
class person_2 extends person {
  // Atributos
  constructor(nombre, genero, color) {
    // Es un metodo que llama al contructor de la clase padre
    super(nombre, genero);
    this.color = color;
  }
  // Metodos
  saludar() {
    console.log(`Hello Developer my name is ${this.nombre} `);
  }
  // orientacion() {
  //   console.log(`Hello Developer, I'm a ${this.genero}`);
  // }
  favoriteColor() {
    console.log(`Hello Developer, my favorite color is ${this.color}`);
  }
}

// Objeto
const Jhon = new person_2("Jhon", "Boy", "Blue");
console.log(Jhon);
Jhon.saludar();
Jhon.orientacion();
Jhon.favoriteColor();

// # METODOS ESTATICOS, GETTERS & SETTERS
// ? Clases publicas, privas o protegidas
// ? Atributos y Metodos estaticos y dinamicos
// las clases viene clase publica por defecto

class person_3 extends person {
  constructor(nombre, genero, food) {
    super(nombre, genero);
    this.food = food;
    // this.drink = null;
  }
  // Un metodo estatico se puede ejecutar sin necesidad de instanciar(heredar) una clase (crear objeto)
  static favoriteFood() {
    console.log(`Hi, my favorite food is ${this.food}`);
  }

  // Los setters y getters son metodos especiales que nos permite establecer y obtener los valores de atributos de nuestra clase
  // ? Propiedades
  get getDrink() {
    return this.drink;
  }
  set setDrink(drink) {
    this.drink = drink;
  }
}

let robbin = new person_3("Robbin", "18", "Pizza");
// robbin.favoriteFood();
console.log(robbin);
person_3.favoriteFood();
console.log(robbin.getDrink);
robbin.setDrink = "Whiskey";
console.log(robbin.getDrink);

// ! Borrando Consola
console.clear();

// # OBJETO CONSOLE
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Hello Developers");

let nombre = "Jon";

console.error(`Error: ${nombre}`);
console.warn(`Warning: ${nombre}`);

// ? Limpiar Consola
// console.clear();

console.log(window);
console.log(document);
// ? Imprime en Objeto
console.dir(document);

// ? Grupos Console
console.group("Paquete");
console.log("Paguete 1");
console.log("Paguete 2");
console.log("Paguete 4");
console.groupEnd();

const array = [1, 2, 3, 4, 5];
const objectTable = {
  nombre: "Object",
  marca: "NaN",
  prototipo: true,
};

// console.table(console);
console.table(array);
console.table(objectTable);

// ? Tiempo de Respuesta
console.time("Tiempo de Respuesta");
const array_2 = Array(50);

for (let i = 0; i < array_2.length; i++) {
  array_2[i] = i;
}
console.timeEnd("Tiempo de Respuesta");

for (let i = 0; i < 10; i++) {
  console.count("Count");
  console.log(i);
}

let x = 4;
let y = 2;
resultadoXY = "X mayor a Y";

// ? Pruebas
console.assert(x < y, { x, y, resultadoXY });

// ! Borrando Consola
console.clear();

// # DATE
console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate());
// S,M,T,W,TH,F,S = 0,1,2,3,4,5,6
console.log(fecha.getDay());
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
console.log(fecha.toDateString());
console.log(fecha.toLocaleDateString());

let cumple = new Date(2005, 3, 14);
console.log(cumple.toLocaleDateString());

// ! Borrando Consola
console.clear();

// # MATH
console.log(Math);

console.log(Math.PI);
// ? Valor Absoluto
console.log(Math.abs(-7.8));
// ? Redondear
console.log(Math.ceil(7.3));
console.log(Math.floor(7.2));
// El mejor
console.log(Math.round(7.2));
// ? Raiz Cuadrada
console.log(Math.sqrt(81));
// ? Elevar
console.log(Math.pow(2, 3));
// ? Positivo o Negativo
// -1 0 1
console.log(Math.sign(-7.8));
// ? Aleatorio
console.log(Math.round(Math.random() * 10));

// ! Borrando Consola
console.clear();

// # CORTO CICUITO
function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Home");
saludar();

// Valor true antes que false con OR, si el valor de la izquierda es true
console.log(true || false);
console.log("Cadena" || "Valor Derecha");
console.log(false || "Valor Derecha");

// Valor false antes que true con &&, si el valor de la izquierda es false
console.log(true && false);
console.log("Cadena" && "Valor Derecha");
console.log(false && "Valor Derecha");

// ! Borrando Consola
console.clear();

// # ALERT, CONFIRM & PROMPT
// let alerta = alert("Alert");
// ? Confirma devuelve true o false
// let confirmacion = confirm("Confirm");
// ? prompt string o null
// let aviso = prompt("Prompt");

// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);

// # EXPRESIONES REGULARES
// Permiten la validacion de cadenas de texto, formularios, numeros, fechas, librerias, etc...

let cadena =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia quisquam, impedit reiciendis del1eniti unde. Amet est nam provident dicta voluptatum, aspernatur lorem veniam! Voluptas deleniti fugiat accusantium doloribus a2liquid.";

// ? Patron de busqueda, banderas
// let expReg = new RegExp("lorem", "ig");
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

// let expReg2 = /lorem/gi;
// let expReg2 = /\d/gi;
// let expReg2 = /[0-9]/gi;
let expReg2 = /lorem{1}/gi;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

// ! Borrando Consola
console.clear();

// # FUNCIONES ANONIMAS AUTOEJECUTABLES
// Funciones viejas antes de la creacion de los modulos
// Epoca  de Jquery
(function () {
  console.log("Hello");
})();

(function (d, w, c) {
  console.log("Hello_2");
  // console.log(d);
  c.log("Hello_2.2");
})(document, window, console);

// ! Borrando Consola
console.clear();

// # MODULOS (EXPORT/IMPORT)
// ? Revisa la Carpeta Modulos

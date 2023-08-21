// # Ejercicios JS
// *1 Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const ejercicio_1 = (cadena) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  // $ Ejercicio
  let resultado = `EL numero de caracacteres de ${cadena} son ${cadena.length}`;
  console.log(resultado);
};

ejercicio_1("Hello World");

// *2 Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const ejercicio_2 = (cadena, number) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (typeof number != "number") {
    throw new TypeError("El dato debe ser un String");
  }
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  if (number == "") {
    console.warn("Ingresa un numero");
    return;
  }
  if (number < 0) {
    console.warn("Ingresa un Numero que NO sea Negativo");
    return;
  }
  // $ Ejercicio
  let resultado = cadena.slice(0, number);
  console.log(resultado);
};

ejercicio_2("Hello Wold", 5);

// *3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const ejercicio_3 = (cadena) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  // $ Ejercicio
  console.log(cadena.split(" "));
};

ejercicio_3("Hello World");

// *4 Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo',3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let respuesta = [];

const ejercicio_4 = (cadena, number) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (typeof number != "number") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  if (number == "") {
    console.warn("Ingresa una numero");
    return;
  }
  if (number < 0) {
    console.warn("Ingresa un numero que NO sea Negativo");
    return;
  }
  // $ Ejercicio
  for (let i = 0; i < number; i++) {
    respuesta.push(cadena);
  }
  console.log(respuesta.join(" "));
};

ejercicio_4("Hello World", 3);

// *5 Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

const ejercicio_5 = (cadena) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  // $ Ejercicio
  console.log(cadena.split(" ").reverse(cadena).join(" "));
};

ejercicio_5("Hello World");

// *6 Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis lorem et quae, ducimus lorem alias nostrum tempore rem impedit sed necessitatibus! Molestias,  lorem corrupti tenetur dignissimos exercitationem consequatur maiores lorem eveniet dolore beatae.";

const ejercicio_6 = (texto, palabra) => {
  // $ Validacion
  if (typeof texto != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (typeof palabra != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (texto == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  if (palabra == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }

  // $ Variables
  let contador = 0;
  const textoLowerCase = texto.toLowerCase();
  const palabras = textoLowerCase.split(" ");

  // $ Ejercicio
  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i] == palabra.toLowerCase()) {
      contador++;
    }
  }
  console.log(`El numero de veces que se repite ${palabra} son ${contador}`);
};

ejercicio_6(lorem, "lorem");

// *7 Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

const ejercicio_7 = (cadena) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }

  // $ Variables
  let cadenaInvertida = cadena.split("").reverse(cadena).join("");

  // $ Ejercicio
  if (cadena == cadenaInvertida) {
    console.log(`La cadena ${cadena} es un Polindromo, ${cadena} == ${cadenaInvertida}`);
  } else {
    console.error(`La cadena ${cadena} NO es un Polindromo, ${cadena} !== ${cadenaInvertida}`);
  }
};

ejercicio_7("reconocer");

// *8 Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

const ejercicio_8 = (cadena, patron) => {
  // $ Validacion
  if (typeof cadena != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (typeof patron != "string") {
    throw new TypeError("El dato debe ser un String");
  }
  if (cadena == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  if (patron == "") {
    console.warn("Ingresa una cadena de texto");
    return;
  }
  // $ Ejercicio
  let expReg = new RegExp(patron, "ig");
  console.log(cadena.replace(expReg, ""));
};

ejercicio_8("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// *9 Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const ejercicio_9 = () => {
  // $ Ejercicio
  let numeroAleatorio = Math.round(Math.random() * 100) + 500;
  console.log(numeroAleatorio);
};

ejercicio_9();

// *10 Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */

const ejercicio_10 = (numero) => {
  // $ Validacion
  if (typeof numero != "number") {
    throw new TypeError("El dato debe ser un String");
  }
  if (numero == "") {
    console.warn("Ingresa un numero");
    return;
  }
  if (numero < 0) {
    console.warn("Ingresa un numero que NO sea Negativo");
  }

  // $ Variables
  let numeroInvertido = numero.toString().split("").reverse(numero).join("");
  let numeroString = numero.toString();

  // $ Ejercicio
  if (numeroString == numeroInvertido) {
    console.log(`El numero ${numero} es un numero Capicua, ${numero} == ${numeroInvertido}`);
  } else {
    console.error(`La numero ${numero} NO es un numero Capicua, ${numero} !== ${numeroInvertido}`);
  }
};

ejercicio_10(2002);

// *11 Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */

const ejercicio_11 = (numero) => {
  // $ Validacion
  if (typeof numero != "number") {
    throw new TypeError("El dato debe ser un String");
  }
  if (numero == "") {
    console.warn("Ingresa un numero");
    return;
  }
  if (numero < 0) {
    console.warn("Ingresa un numero que NO sea Negativo");
  }
  // $ Ejercicio
  let factorial = 1;
  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }
  console.log(`El factorial de ${numero} es ${factorial}`);
};

ejercicio_11(5);

// *12 Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */

const ejercicio_12 = (numero) => {
  // $ Validacion
  if (typeof numero != "number") {
    throw new TypeError("El Dato debe ser un Numero");
  }
  if (numero == 0) {
    console.warn("Ingresa un numero");
    return;
  }
  if (numero < 0) {
    console.warn("Ingresa un numero que NO sea Negativo");
    return;
  }
  // $ Ejercicio
  let divisible = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      divisible = false;
      break;
    }
  }
  if (divisible == true) {
    console.log(`El numero ${numero} es Primo`);
  } else {
    console.log(`El numero ${numero} NO es Primo`);
  }
};

ejercicio_12(7);

// *13 Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

const ejercicio_13 = (numero) => {
  // $ Validacion
  if (typeof numero != "number") {
    throw new TypeError("El Dato debe ser un Numero");
  }
  if (numero == 0) {
    console.warn("Ingresa un numero");
    return;
  }
  if (numero < 0) {
    console.warn("Ingresa un numero que NO sea Negativo");
  }
  // $ Ejercicio
  if (numero % 2 == 0) {
    console.log(`El numero ${numero} es Par `);
  } else {
    console.log(`El numero ${numero} Impar `);
  }
};

ejercicio_13(8);

// *14 Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

const ejercicio_14 = (numero, grados) => {
  // $ Validacion
  if (isNaN(numero)) {
    console.warn("Ingresa un Dato Numerico");
    return;
  }
  if (grados == undefined || grados == "") {
    console.warn("Ingresa un Dato para convertir");
    return;
  }
  if (typeof numero !== "number") {
    throw new TypeError("El Dato debe ser un Numero");
  }
  if (typeof grados !== "string") {
    throw new TypeError("El Dato debe ser un String");
  }
  if (numero < 0) {
    console.warn("Ingresa un Numero Positivo");
    return;
  }

  // $ Variables
  let grado = grados.toLowerCase();
  let numero_f = Math.round(numero * (9 / 5) + 32);
  let numero_c = Math.round((numero - 32) * (5 / 9));

  // $ Ejercicio
  if (grado == "c") {
    console.log(`${numero}°C == ${numero_f}°F`);
  } else if (grado == "f") {
    console.log(`${numero}°F == ${numero_c}°C`);
  } else {
    console.warn("El tipo de grado a convertir NO es valido");
  }
};

ejercicio_14(0, "c");

// *15 Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

const ejercicio_15 = () => {};

// *16 Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

// *17 Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */

// *18 Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

// *19 Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

// *20 Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

// *21 Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

// *22 Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

// *23 Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

// *24 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

// *25 Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

// *26 Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

// *27 Programa una clase llamada Pelicula.
// *La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
// *  - Todos los datos del objeto son obligatorios.
// *  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
// *  - Valida que el título no rebase los 100 caracteres.
// *  - Valida que el director no rebase los 50 caracteres.
// *  - Valida que el año de estreno sea un número entero de 4 dígitos.
// *  - Valida que el país o paises sea introducidos en forma de arreglo.
// *  - Valida que los géneros sean introducidos en forma de arreglo.
// *  - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
// *  - Crea un método estático que devuelva los géneros aceptados*.
// *  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
// *  - Crea un método que devuelva toda la ficha técnica de la película.
// *  - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

// *Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

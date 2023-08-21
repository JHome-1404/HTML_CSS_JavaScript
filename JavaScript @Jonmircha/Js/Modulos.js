// ## MODULOS JS
// ? ../ para acceder a la carpeta raiz
import saludar, { Saludar, PI, usuario, password } from "../Js/Import.js";
import { aritmetica as calculos } from "../Js/Import.js";

console.log(PI);
console.log(`Welcome ${usuario} to Vscode`);
console.log(`Your password is ${password}`);

// console.log(aritmetica.sumar(3, 4));
// console.log(aritmetica.multiplicar(2, 3));
console.log(calculos.sumar(3, 4));
console.log(calculos.multiplicar(2, 3));

saludar(usuario);
let saludo = new Saludar();
console.log(saludo);
saludo.hi(usuario);

// ! IMPORTANTE: Colocar siempre el type = "module" en html para poder hacer importaciones

// $ Normal/ import {"exportaciones"} from "lugar.de.exportacion"
// $ Default/ import exportacio.default,{"exportaciones"} from "lugar.de.exportacion"

// $ exportacion as exportacion / cambia el nombre

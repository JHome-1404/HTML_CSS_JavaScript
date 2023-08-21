// !! Para cualquier duda del siguiente codigo, pregunta a Chat-gpt

// ## TEMPORIZADORES
let timer = 0;

//? Ejecucion de una sola vez
let saludar = setTimeout(() => {
  console.log("Hello Developer =)");
}, 1000);

//? Ejecucion de indefinida veces
let timer_control = setInterval(() => {
  timer++;
  console.log(`Timer: ${timer}`);
}, 1000);
// ? Cantidad de tiempo en milisegundos

// ? Reloj
let reloj_control = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

// ? Guardar los temporizadores en una variables y controlarlos con clear
clearTimeout(saludar);
clearInterval(timer_control);
clearInterval(reloj_control);

// # CARACTERISTICAS ESPECIALES
// Procesamiento de un sigle-thread y multi-thread (hilos)
// Operaciones de CPU y Operaciones Entrada/Salida (subprocesos,respuestas en el navegador)
// Operaciones Concurrentes y Paralelas (tareas al mismo y en diferentes tiempo)
// Operaciones Bloqueantes y No Bloquenates (fase de espera, bloquea pasos hasta terminar)
// Operaciones Sincronicas y Asincronicas (respuetas inmediatas, respuestas demoradas)
// ? Event-Loop

// ? Codigo Sincrono-bloqueante
(() => {
  console.log("Codigo Sincronico");
  const dos = () => {
    console.log("Dos");
  };
  const uno = () => {
    console.log("Uno");
    dos();
    console.log("Tres");
  };
  uno();
  console.log("Fin");
})();
// ! Funciona en orden y bloquea tareas hasta que termine una en una

// ? Codigo Asincrono-No bloqueantes
// (() => {
//   console.log("Codigo Asincronico");
//   const dos = () => {
//     setTimeout(() => {
//       console.log("Dos");
//     }, 1000);
//   };
//   const uno = () => {
//     setTimeout(() => {
//       console.log("Uno");
//     }, 0);
//     dos();
//     console.log("Tres");
//   };
//   uno();
//   console.log("Fin");
// })();
// ! Funciona en Desorden y NO bloquea tareas, funciona en diferentes tiempos

// ! Apilamiento de Tareas, aparencen a lo ultimo despues de ejecutar las tarea normales

// ? JavaScript es un modelo asicrono y NO bloquenate, con un loop de eventos implementado en un solo hilo, para operacion de entrada y salida

// ! Borrando Consola
console.clear();

// ## MECANISMO PARA EL MANEJO DE LA SINCRONIA
// # CALLBACKS
//  es una función que se pasa como argumento a otra función y se ejecuta después de que esa función ha terminado de realizar su tarea.
// ? Funcion vieja de usar callbacks
function squad_Callback(value, callback) {
  setTimeout(() => {
    callback(value, value * value);
  }, 0 | (Math.random() * 1000));
}

// ? Callback Hell
// squad_Callback(0, (value, result) => {
//   console.log("Inicia Callback");
//   console.log(`Callback: ${value}, ${result}`);
//   squad_Callback(1, (value, result) => {
//     console.log("Inicia Callback");
//     console.log(`Callback: ${value}, ${result}`);
//     squad_Callback(2, (value, result) => {
//       console.log("Inicia Callback");
//       console.log(`Callback: ${value}, ${result}`);
//     });
//   });
// });

function operacionAsincronica(callback) {
  // Simulamos una operación que toma tiempo utilizando setTimeout
  setTimeout(function () {
    const resultado = 10 + 5;
    // Una vez que la operación termina, llamamos al callback con el resultado
    callback(resultado);
  }, 2000); // 2000 milisegundos (2 segundos) de espera antes de ejecutar el callback
}

// Función de callback que se ejecuta una vez que la operación asincrónica ha terminado
function miCallback(resultado) {
  console.log("El resultado de la operación es:", resultado);
}

// Llamamos a la función "operacionAsincronica" y pasamos el callback como argumento

// operacionAsincronica(miCallback);

console.log("La operación principal continúa mientras se ejecuta la operación asincrónica...");

// ! Borrando Consola
console.clear();

// ! IMPORTANT: existen otras técnicas más avanzadas, como Promesas y async/await

// # PROMESAS
function squad_Promise(value) {
  if (typeof value !== "number") {
    return Promise.reject("El valor ingresado NO es un Numero");
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //$ Return Positivo si se cumple
      resolve({
        value,
        result: value * value,
        finish() {
          console.log("Fin Promise");
        },
      });
      //$ Si ocurre un error, rechazamos la promesa con un mensaje de error
      // reject("Ocurrió un error");
    }, 2000);
  });
}

// ? Promise Hell
squad_Promise(0)
  //$ Resultados Positivos
  // .then((obj) => {
  //   console.log(`Promise: ${obj.value}, ${obj.result}`);
  //   return squad_Promise(1);
  // })
  // .then((obj) => {
  //   console.log(`Promise: ${obj.value}, ${obj.result}`);
  //   return squad_Promise(2);
  // })
  // .then((obj) => {
  //   console.log(`Promise: ${obj.value}, ${obj.result}`);
  //   return squad_Promise(3);
  // })
  // .then((obj) => {
  //   console.log(`Promise: ${obj.value}, ${obj.result}`);
  //   obj.finish();
  // })
  //$ Resultados Negativos (Bloqueo de Funciones)
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// # ASYNC & AWAIT
//? Las promesas y funciones async trabajan en conjunto
function squad_Promise(value) {
  if (typeof value !== "number") {
    return Promise.reject("El valor ingresado NO es un Numero");
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      //$ Return Positivo si se cumple
      resolve({
        value,
        result: value * value,
        finish() {
          console.log("Fin Promise");
        },
      });
    }, 2000);
  });
}
// $ Funcion Asincrona Declarada
async function function_Async_Declarada() {
  try {
    console.log("Inicio de Funcion Asincrona");
    // ? Await sirve para esperar resultado de ejecucion
    let obj = await squad_Promise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.error(`Se produjo el siguiente error: ${error}`);
  }
}
function_Async_Declarada();

// $ Funcion Asincrona Expresada
const function_Async_Expresada = async () => {
  try {
    console.log("Inicio de Funcion Asincrona");
    // ? Await sirve para esperar resultado de ejecucion
    let obj = await squad_Promise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await squad_Promise(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.error(`Se produjo el siguiente error: ${error}`);
  }
};
function_Async_Expresada();

// ## WEB APIs
console.log(window);
console.log(window.navigator);
console.dir(document);

const hablar = (text) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

// hablar("Mamahuevo");

// ! Borrando Consola
console.clear();

// ## DOM
// # INTRODUCION
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 3000);
// document.write("<h2>Hello World</h2>");

// ! Borrando Consola
console.clear();

// # NODOS, ELEMENTOS & SELECTORES
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
// * ELEMENTOS
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

// * SELECTORES
// ? Recoge el primero de cada tipo
console.log(document.querySelector("#menu"));
// ? Reune todos los nodos en una nodelist
console.log(document.querySelectorAll("li"));
console.log(document.querySelectorAll(".card"));

console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

// ? NO iterable
// document.getElementsByTagName("a").forEach((r) => {
//   console.log(e);
// });

// ? Iterable
document.querySelectorAll("a").forEach((e) => {
  console.log(e);
});

console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));

// ! A nivel de redimiento usa selectores si requieres recorrer estos elementos, si no usa elementos

// ! Borrando Consola
console.clear();

// # ATRIBUTOS & DATA-ATTRIBUTES
// ? Get & Set
// ? Recoger Atributos
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// ? Cambiar Atributos
document.documentElement.lang = "es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

// ? para distingir variables DOM
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_black");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.youtube.com/@jonmircha");
console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.remove();
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

// ? Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

$linkDOM.dataset.description = "D.O.M";
console.log($linkDOM.dataset.description);

// ! Borrando Consola
console.clear();

// # ESTILOS Y VARIABLES CSS
// ? Para accerder a propiedades css con "-" no se pone y la pablara separada en mayuscula

// ? Estilos
console.log($linkDOM.style);
console.log(window.getComputedStyle($linkDOM));

console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.color = "#912";
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.fontSize = "2rem";

// ? Variables
const $html = document.documentElement;

$html.style.setProperty("--bg-secundary", "red");

let varPrimaryColor = getComputedStyle($html).getPropertyValue("--bg-primary");
let varSecundaryColor =
  getComputedStyle($html).getPropertyValue("--bg-secundary");

console.log(varPrimaryColor, varSecundaryColor);

$linkDOM.style.backgroundColor = varPrimaryColor;
$linkDOM.style.backgroundColor = varSecundaryColor;

// ! Borrando Consola
console.clear();

// # CLASES CSS
const $card = document.querySelector(".card");
console.log($card.className);
console.log($card.classList);

$card.classList.add("saturate");
console.log($card.classList.contains("saturate"));
console.log($card.className);
console.log($card.classList);

// ? Se pude quitar o poner mas de una clase
$card.classList.remove("saturate");
console.log($card.classList.contains("saturate"));

const $click_me = document.querySelector(".click-me");

// $ Poner y quitar clase
$click_me.addEventListener("click", () => {
  $card.classList.toggle("light");
  console.log($card.classList);
});

// ! Borrando Consola
console.clear();

// # TEXTO Y HTML
const $whatisDOM = document.querySelector(".que-es");

let text = `
  <p>
  El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
  </p>
  <p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
  </p>
  <p>
  <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
  </p>
  `;

// ! No estandar
$whatisDOM.innerText = text;
// ? Solo Escritura
$whatisDOM.textContent = text;
// ? Estandar (HTML & JS)
$whatisDOM.innerHTML = text;
// ? Reemplaza el objeto por uno nuevo
$whatisDOM.outerHTML = text;

// # RECCORRIENDO EL DOM
// ? Atraves de los Elementos y Nodos, tener cuidado con confundirlos

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
// ? Antecesor mas cercano
console.log($cards.closest("div"));

// ! Borrando Consola
console.clear();

// ## CREANDO ELEMENTOS Y FRAGMENTOS
// # Elementos
// ? 1 Forma
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcation = document.createElement("figcaption");

$figcation.textContent = "Programming JS";
$img.setAttribute("src", "../Img/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg");
$img.setAttribute("alt", "tech");
$img.classList.add("card");

$figure.appendChild($img);
$figure.appendChild($figcation);
$cards.appendChild($figure);

const $figure2 = document.createElement("figure");

// ? 2 Forma (Mejor)
$figure2.innerHTML = `
<img src="../Img/altumcode-dMUt0X3f59Q-unsplash.jpg" alt="tech" />
<figcaption>Programming JS-2</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

// ?? Forma Dinamica (ajax)
// ? 1 Forma
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");

document.write(`<h2>Estaciones del Año</h2>`);
document.body.appendChild($ul);

estaciones.forEach((e) => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $ul.appendChild($li);
});

// ? 2 Forma (Mejor)
const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
const $ul2 = document.createElement("ul");

document.write(`<h2>Continentes del Mundo</h2>`);
document.body.appendChild($ul2);

continentes.forEach((e) => {
  // $ul.innerHTML = "";
  $ul2.innerHTML += `<li>${e}</li>`;
});

// # Fragmentos
// ? mejora el rendimiento de inserciones en el DOM con solo una insercion (uso de NODOS)(Objeto?)

const diasSemana = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
const $ul3 = document.createElement("ul");

document.write(`<h2>Dias de la Semana</h2>`);
$fragment = document.createDocumentFragment();

diasSemana.forEach((e) => {
  const $li = document.createElement("li");
  $li.textContent = e;
  $fragment.appendChild($li);
});

$ul3.appendChild($fragment);
document.body.appendChild($ul3);

// ? Usar mejor la ultima forma con fragmentos para evitar mucho codigo y el consumo de muchos recursos

// # TEMPLATES HTML (OLD)
const $template = document.querySelector(".template-card").content;
const $fragment2 = document.createDocumentFragment();
const cardContent = [
  {
    title: "Template 01",
    img: "../Img/altumcode-dMUt0X3f59Q-unsplash.jpg",
  },
  {
    title: "Template 02",
    img: "../Img/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg",
  },
  {
    title: "Template 03",
    img: "../Img/james-harrison-vpOeXr5wmR4-unsplash.jpg",
  },
];

cardContent.forEach((e) => {
  $template.querySelector("img").setAttribute("src", e.img);
  $template.querySelector("img").setAttribute("alt", e.title);
  $template.querySelector("figcaption").textContent = e.title;

  let $clone = document.importNode($template, true);
  $fragment2.appendChild($clone);
});

$cards.appendChild($fragment2);

// # MODIFICANDO ELEMENTOS (OLD-STYLE)
const $newCard = document.createElement("figure");
const $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="../Img/neom-ckfXPMb2_BI-unsplash.jpg" />
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// ? Reemplazar
// $cards.replaceChild($newCard, $cards.children[2]);
// ? Antes de...
// $cards.insertBefore($newCard, $cards.firstElementChild);
// ? Eliminar
// $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);

// # MODIFICANDO ELEMENTOS (NEW-STYLE)
// .insertAdjacent...
//   .insertAdjacentElement(position, el)
//   .insertAdjacentHTML(position, html)
//   .insertAdjacentText(position, text)

// Posiciones:
//   beforebegin(hermano anterior)
//   afterbegin(primer hijo)
//   beforeend(ultimo hijo)
//   afterend(hermano siguiente)

const $newCard2 = document.createElement("figure");

let $contenCard = `
  <img src="../Img/neom-ckfXPMb2_BI-unsplash.jpg" />
  <figcaption></figcaption>
`;

$newCard2.classList.add("card");

// $cards.insertAdjacentElement("beforebegin", $newCard2);
// $cards.insertAdjacentElement("afterbegin", $newCard2);
// $cards.insertAdjacentElement("beforeend", $newCard2);
// $cards.insertAdjacentElement("afterend", $newCard2);

// $cards.insertAdjacentHTML("beforeend", $contenCard);
// $newCard2.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// # MANEJADORES DE EVENTOS
// ? e de parametro como evento
// https://developer.mozilla.org/en-US/docs/Web/Events

const holaMundo = () => {
  alert("Hello World");
};

const $event = document.querySelector(".event");
const $eventMultiple = document.querySelector(".event-multiple");

// ? OLD
// $event.onclick = holaMundo();
// ? NEW
$eventMultiple.addEventListener("click", (e) => {
  alert("Hola mundo");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
});

// $ Detectar Pisicion Mouse
// document.addEventListener("mousemove", (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   console.log(`X:${x},Y:${y}`);
// });

// ## EVENTOS CON PARAMETROS Y REMOVER EVENTOS
// # Parametros
const saludar = (nombre = "Desconocid@") => {
  alert(`Hola ${nombre}`);
};

// ? Mal
// $eventMultiple.addEventListener("click", saludar);
// ? Mejor
$eventMultiple.addEventListener("click", () => {
  saludar("Jesus");
});

// # Remover
// ? para remover eventos se necesita una funcion declarada o expresada, no funciona con anonimas
const $eventRemove = document.querySelector(".event-remove");

const removerEvent = (e) => {
  alert(`Removiendo Evento ${e.type}`);
  console.log(e);
  $eventRemove.removeEventListener("dblclick", removerEvent);
  $eventRemove.disabled = true;
};

$eventRemove.addEventListener("dblclick", removerEvent);

// # FLUJO DE EVENTOS (BURBUJA Y CAPTURA)]
// ? Del elementos interno al externo
const $divEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
  e.stopPropagation();
}

// ? Burburja (Interno a Externo)
// $divEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos, false);
// });
$divEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

// ? Captura (Externo a Interno)
// $divEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos, true);
// });

// ? Estrucutra 1
// $divEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos, {
//     // ? Interno & Externo
//     capture: false,
//     // ? Una sola vez
//     once: true,
//   });
// });

// ? Estrucutra 2
// $divEventos.forEach((div) => {
//   div.addEventListener(
//     "click",
//     (e) => {
//       console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
//     },
//     {
//       once: true,
//     }
//   );
// });

// # STOPROPAGATIONS & PREVENTDEFAULT
const $linkEventos = document.querySelector(".eventos-flujo a");

$linkEventos.addEventListener("click", (e) => {
  alert("@jonmircha");
  e.preventDefault();
  e.stopPropagation();
});

// # DELEGACION DE EVENTOS
const $linkEventos2 = document.querySelector(".eventos-flujo-2 a");

function flujoEventos2(e) {
  console.log(
    `Hola Developer te saluda ${this.className}, el click lo origino ${e.target.className}`
  );
}

// $ MEJOR FORMA (OPTIMA)
// document.addEventListener("click", (e) => {
//   console.log(`Click en: ${e.target}`);
//   if (e.target.matches(".eventos-flujo-2 div")) {
//     flujoEventos2(e);
//   }
//   if (e.target.matches(".eventos-flujo-2 a")) {
//     alert("Hello Developer");
//     e.preventDefault();
//   }
// });

// ! Para optimizar los eventos en casos extensos sin necesidad de .foreach() se suele colocar el evento en el selector padre superior con condicionales en sus eventos hijos (@falconmaster)
// ? Colocar matches o tagname o investigar otro metodo

// ## BOM
// # PROPIEDADES Y EVENTOS
// window.addEventListener("resize", (e) => {
//   console.clear();
//   console.log("*** Evento Resize ***");
//   // ? Ventana
//   console.log(`VentanaX ${window.innerWidth}`);
//   console.log(`VentanaY ${window.innerHeight}`);
//   // ? Navegador
//   console.log(`NavegadorX ${window.outerWidth}`);
//   console.log(`NavegadorY ${window.outerHeight}`);
//   console.log(e.target);
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log("*** Evento Scroll ***");
//   // ? Scroll
//   console.log(`ScrollX ${window.scrollX}`);
//   console.log(`ScrollY ${window.scrollY}`);
//   console.log(e.target);
//   // ? Los pixweles que recorre el scroll son dependiendo del tamaño de la ventana
// });

// window.addEventListener("load", (e) => {
//   console.log("*** Evento Load ***");
//   // ? Pantalla
//   console.log(`ScreenX ${window.screenX}`);
//   console.log(`ScreenY ${window.screenY}`);
//   console.dir(`Tiempo de Respuesta ${e.timeStamp}`);
//   // ? Espera a que carge el html, css js y demas para continuar
// });

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("*** Evento DOMContentLoaded ***");
//   // ? Pantalla
//   console.log(`ScreenX ${window.screenX}`);
//   console.log(`ScreenY ${window.screenY}`);
//   console.dir(`Tiempo de Respuesta ${e.timeStamp}`);
//   // ? No espere nada
// });

// # METODOS
// window.alert("asdasas");
// alert("asas");

const $btnAbrir = document.querySelector(".abrir-ventana");
const $btnCerrar = document.querySelector(".cerrar-ventana");
const $btnImprimir = document.querySelector(".imprimir-ventana");
let ventana = undefined;

$btnAbrir.addEventListener("click", () => {
  // window.open("https://jonmircha.com");
  ventana = open("https://jonmircha.com");
});
$btnCerrar.addEventListener("click", () => {
  ventana.close();
});
$btnImprimir.addEventListener("click", () => {
  print();
});

// # URL, HISTORIAL Y NAVEGADOR
// ?? URL
console.log("*** Objeto URL (Location) ***");
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
// ? Enlcaes de Paginas (url)
console.log(location.hash);
// ? Valores de Url (formularios)
console.log(location.search);
console.log(location.pathname);

let reload = setInterval(() => {
  location.reload();
}, 5000);

clearInterval(reload);

// ! Borrando Consola
console.clear();

// ?? HISTORIAL
console.log("*** Objeto Historial (History) ***");
// ? Historial de paginas
console.log(history);
// ? Cantidad de Paginas
console.log(history.length);
// ? Volver cantidad de Paginas Visitadas
// history.back(3);
// ? Regresar cantidad de Paginas Visitadas
// history.forward(3);
// ? Volver o Avanzar Paginas (Avanzar: +, Regresar: -)
// history.go(0);
// history.go(1);
// history.go(-1);

// ! Borrando Consola
console.clear();

// ?? NAVEGADOR
console.log("*** Objeto Navigator ***");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.mediaDevices);
// ? Juego del Dinosaurio
console.log(navigator.onLine);
// ? API (Instalador de aplicacion)
// console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);

// ## AJAX
// # XTMLHTTPREQUEST
// ? API interna de los navegadores, exiten apis publicas o privadas (con tokens y llaves de autenticacion)
// $ Instancia
const xhr = new XMLHttpRequest(),
  xhrContent = document.getElementById("xhr"),
  fragment = document.createDocumentFragment();

// $ Asignacion Evento
xhr.addEventListener("readystatechange", () => {
  // ? Estados
  if (xhr.readyState !== 4) return;
  // ? Validacion de Correcto
  if (xhr.status >= 200 && xhr.status < 300) {
    let json = JSON.parse(xhr.responseText);
    json.forEach((el) => {
      const li = document.createElement("li");
      li.innerHTML = `--Name: ${el.name}, --Email: ${el.email}, --Phone: ${el.phone} `;
      fragment.appendChild(li);
    });
    xhrContent.appendChild(fragment);
  } else {
    let message = xhr.statusText || "Ocurrio un error";
    xhrContent.innerHTML = `Error ${xhr.status}: ${message}`;
  }
  // console.log("Esto se ejecuta independiente de la promesa");
});

// $ Abrir & Enviar
// ? Publica
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// ? Local
// xhr.open("GET", "/JavaScript @Jonmircha/Js/Json/Users.json");
xhr.send();

// # API FETCH
const fetchContent = document.getElementById("fetch"),
  fragment2 = document.createDocumentFragment();

// fetch("/JavaScript @Jonmircha/Js/Json/Users.json", { method: "GET" })
fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
  .then((respuesta) =>
    respuesta.ok ? respuesta.json() : Promise.reject(respuesta)
  )
  .then((json) => {
    json.forEach((el) => {
      const li = document.createElement("li");
      li.innerHTML = `--Name: ${el.name}, --Email: ${el.email}, --Phone: ${el.phone} `;
      fragment2.appendChild(li);
    });
    fetchContent.appendChild(fragment2);
  })
  .catch((error) => {
    let message = error.statusText || "Ocurrio un Error";
    fetchContent.innerHTML = `Error: ${error.status}: ${message}`;
  })
  .finally(() => {
    // console.log("Esto se ejecuta independiente de la promesa");
  });

// # API FETCH + ASYNC-WAIT
const fetchAsync = document.getElementById("fetch-async"),
  fragment3 = document.createDocumentFragment();
const getData = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await res.json();
    if (!res.ok) {
      //   throw new Error("Ocurrio un Error al Solicitar los Datos");
      throw { status: res.status, statusText: res.statusText };
    }

    json.forEach((el) => {
      const li = document.createElement("li");
      li.innerHTML = `--Name: ${el.name}, --Email: ${el.email}, --Phone: ${el.phone} `;
      fragment3.appendChild(li);
    });
    fetchAsync.appendChild(fragment3);
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    fetchAsync.innerHTML = `Error: ${err.status}: ${message}`;
  } finally {
    // console.log("Esto se ejecuta independiente de la promesa");
  }
};
getData();
// ? Throw es un return que manda el error al cath

// # BIBLIOTECA AXIOS
// ? Parcea los datos de una vez en formato json (Abreviacion de Pasos)
const axiosContent = document.getElementById("axios"),
  fragment4 = document.createDocumentFragment();
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    let json = res.data;
    json.forEach((el) => {
      const li = document.createElement("li");
      li.innerHTML = `--Name: ${el.name}, --Email: ${el.email}, --Phone: ${el.phone} `;
      fragment4.appendChild(li);
    });
    axiosContent.appendChild(fragment4);
  })
  .catch((err) => {
    // console.log(err.response);
    let message = err.response.statusText || "Ocurrio un Error";
    axiosContent.innerHTML = `Error: ${err.response.status}: ${message}`;
  })
  .finally(() => {
    // console.log("Esto se ejecuta independiente de la promesa");
  });

// # AXIOS + ASYNC-WAIT
const axiosAsync = document.getElementById("axios-async"),
  fragment5 = document.createDocumentFragment();
axios;
const getDataAxios = async () => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let data = await res.data;
    data.forEach((el) => {
      const li = document.createElement("li");
      li.innerHTML = `--Name: ${el.name}, --Email: ${el.email}, --Phone: ${el.phone} `;
      fragment5.appendChild(li);
    });
    axiosAsync.appendChild(fragment5);
  } catch (err) {
    let message = err.response.statusText || "Ocurrio un Error";
    axiosAsync.innerHTML = `Error: ${err.response.status}: ${message}`;
  } finally {
    console.log("Esto se ejecuta independiente de la promesa");
  }
};
getDataAxios();

// ? 5 formas para el consumo de una api, las 2 mejores son fetch + asyn-wait y axios + async-wait

// # API REST
// ? APi especialiadad para protocolos HTTP (CRUD) con rest(relacion cliente servidor)(api independientes)(cache)(ENDPOINT url unica)(capas e escalabilidad)(https)
// ? Modelo de Maquetacion Rest (Rest Full API)
// ? https://www.youtube.com/watch?v=wzoUu6rcQ4c&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=112
// ? Modelo por el cual no se usa controladores y modelos, sino peticiones y respuestas json al servidor independiente y respuestas independientes por url

// # API JSON SERVER
// ? Ejecucion de una api de manera local
// ? https://github.com/typicode/json-server
// ? Insomnia para peticiones http

// ? npm install -g json-server
// ? json-server -w -p 5000 <direccion carperta>

document.addEventListener("DOMContentLoaded", () => {
  const includeHTML = async (el, url) => {
    try {
      let res = await fetch(url);
      let html = await res.text();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      el.outerHTML = html;
    } catch (err) {
      let message =
        err.statusText ||
        "Error al cargar el archivo, verifica que estes haciendo la perticion http o https";
      el.outerHTML = `<h2>${err.status}: ${message}</h2>`;
    }
  };
  const include = document.querySelectorAll("[data-include]");
  include.forEach((el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
  getHome();
});

const main = document.querySelector("main");
const getHome = async () => {
  try {
    let res = await fetch("Assets/Home.html");
    let html = await res.text();
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    main.innerHTML = html;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    main.innerHTML = `<h1>${err.status}: ${message}</h1>`;
  }
};

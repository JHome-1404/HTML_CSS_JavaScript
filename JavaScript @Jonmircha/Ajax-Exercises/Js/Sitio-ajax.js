const header = document.querySelector("header");
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

document.addEventListener("DOMContentLoaded", getHome);

header.addEventListener("click", async (e) => {
  e.preventDefault();
  if (e.target.tagName === "A") {
    try {
      let res = await fetch(`${e.target.href}`);
      let html = await res.text();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      main.innerHTML = html;
    } catch (err) {
      let message = err.statusText || "Ocurrio un Error";
      main.innerHTML = `<h1>${err.status}: ${message}</h1>`;
    }
  }
});

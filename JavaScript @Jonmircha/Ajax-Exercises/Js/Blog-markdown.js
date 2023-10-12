const main = document.querySelector("main");
const getMarkDown = async () => {
  try {
    let resUrl = "Assets/Show-Down.md";
    let res = await fetch(resUrl);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let data = await res.text();
    let converter = new showdown.Converter().makeHtml(data);
    main.innerHTML = converter;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    main.innerHTML = `<h2>Error ${err.status}: ${message}</h2>`;
  }
};
getMarkDown();

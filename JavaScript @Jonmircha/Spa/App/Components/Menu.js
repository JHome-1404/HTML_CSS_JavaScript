export const menu = () => {
  const menu = document.createElement("nav");
  menu.classList.add("menu");
  menu.innerHTML = `
  <a href="#/">Home</a>
  <a href="#/search">Busqueda</a>
  <a href="#/contact">Contacto</a>
  <a href="https://aprendejavascript.org" target="_blank" rel="noopener">Aprende Js</a>
  `;
  return menu;
};

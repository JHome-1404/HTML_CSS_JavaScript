export const loader = () => {
  const loader = document.createElement("img");
  loader.src = "App/Assets/loader.svg";
  loader.alt = "Cargando...";
  loader.classList.add("loader");
  return loader;
};

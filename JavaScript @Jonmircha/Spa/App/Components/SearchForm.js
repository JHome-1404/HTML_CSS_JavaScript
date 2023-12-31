export const searchForm = () => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  form.classList.add("search-form");
  input.name = "search";
  input.type = "search";
  input.autocomplete = "off";
  input.placeholder = "Buscar...";

  if (location.hash.includes("#/search")) {
    input.value = localStorage.getItem("wpSearch");
  }

  document.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  document.addEventListener("submit", (e) => {
    if (!e.target.classList.contains("search-form")) return false;
    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  form.appendChild(input);
  return form;
};

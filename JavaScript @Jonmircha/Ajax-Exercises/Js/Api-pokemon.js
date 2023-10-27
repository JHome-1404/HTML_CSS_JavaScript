const main = document.querySelector("main");
const links = document.querySelector(".links");

const endPoints = "https://pokeapi.co/api/v2/pokemon/";

const getPokemons = async (endpoints) => {
  try {
    main.innerHTML = `
    <div class="card card-loader">
      <div class="card-container">
        <img class="loader" src="./Assets/oval.svg" alt="Cargando...">
      </div>
    </div>
    `;
    let res = await fetch(endpoints);
    let template = "";

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let json = await res.json();
    for (let i = 0; i < json.results.length; i++) {
      try {
        let res = await fetch(json.results[i].url);
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        let pokemon = await res.json();
        template += `
        <div class="card">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          <div class="card-container">
            <p>${pokemon.name}</p>
          </div>
        </div>
        `;
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error";
        template += `
        <div class="card card-danger">
          <div class="card-container">
            <p>Error ${err.status}: ${message}</p>
          </div>
        </div>
        `;
      }
    }
    main.innerHTML = template;

    let preLink = json.previous
      ? `<a class="btn" href="${json.previous}">◀️</a>`
      : "";
    let nextLink = json.next ? `<a class="btn" href="${json.next}">▶️</a>` : "";
    links.innerHTML = `${preLink} ${nextLink}`;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  getPokemons(endPoints);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    e.preventDefault();
    getPokemons(e.target.getAttribute("href"));
  }
});

// ? El ciclo for es uns estructura bloqueante que no continia con sus interracciones hasta que se resuelva la anterior, el foreach no lo es

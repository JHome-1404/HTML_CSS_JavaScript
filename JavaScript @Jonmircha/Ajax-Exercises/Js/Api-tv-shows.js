const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const input = document.getElementById("search");

const getShows = async (query) => {
  try {
    container.innerHTML = `<img class="loader" src="./Assets/oval.svg" alt="Cargando...">`;
    let api = `https://api.tvmaze.com/search/shows?q=${query}`;
    let res = await fetch(api);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    let json = await res.json();
    console.log(json);
    if (json.lenght === 0) {
      container.innerHTML = `<h2>No Existen resultados de show para el criterio de busqueda: ${query}</h2>`;
    } else {
      json.forEach((el) => {
        let show = document.createElement("article");
        show.classList.add("show");
        show.innerHTML = `
        <h2>${el.show.name}</h2>
        <div>${el.show.summary ? el.show.summary : "Sin Descripcion"}</div>
        <img src="${el.show.image ? el.show.image.medium : "#"}" alt="${
          el.show.name
        }">
        <a href="${el.show.url ? el.show.url : "#"}" target="${
          el.show.url ? "_blank" : "_self"
        }">${el.show.url ? "Ver Mas" : ""}</a>
        `;
        fragment.appendChild(show);
      });
      container.innerHTML = "";
      container.appendChild(fragment);
    }
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    container.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  }
};

document.addEventListener("keypress", (e) => {
  if (e.target === input) {
    if (e.key === "Enter") {
      let query = e.target.value.toLowerCase();
      getShows(query);
    }
  }
});

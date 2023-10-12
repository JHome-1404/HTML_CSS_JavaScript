// # DOM
const table = document.querySelector(".crud-table");
const form = document.querySelector(".crud-form");
const title = document.querySelector(".crud-title");
const tbody = document.querySelector(".crud-tbody");
const fragment = document.createDocumentFragment();

const getAll = async () => {
  try {
    let res = await fetch("http://localhost:5000/users");
    let json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    json.forEach((el) => {
      let data = document.createElement("tr");
      data.innerHTML = `
        <td class="name">${el.nombre}</td>
        <td class="edad">${el.edad}</td>
        <td class="email">${el.email}</td>
        <td class="telefono">${el.telefono}</td>
        <td>
          <button class="edit" data-id="${el.id}" data-nombre="${el.nombre}" data-edad="${el.edad}" data-email="${el.email}" data-telefono="${el.telefono}">Editar</button>
          <button class="delete" data-id="${el.id}" data-nombre="${el.nombre}">Eliminar</button>
        </td>
      `;
      fragment.appendChild(data);
    });
    table.querySelector("tbody").appendChild(fragment);
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    table.insertAdjacentHTML(
      "afterend",
      `<p><b>Error ${err.status}: ${message}</b></p>`
    );
  }
};

document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!e.target.id.value) {
    // $ POST
    try {
      let options = {
        method: "POST",
        headers: { "Content-type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          edad: e.target.edad.value,
          email: e.target.email.value,
          telefono: e.target.telefono.value,
        }),
      };

      let res = await fetch("http://localhost:5000/users", options);
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (err) {
      let message = err.statusText || "Ocurrio un Error";
      form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  } else {
    // $ PUT
    try {
      let options = {
        method: "PUT",
        headers: { "Content-type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          nombre: e.target.nombre.value,
          edad: e.target.edad.value,
          email: e.target.email.value,
          telefono: e.target.telefono.value,
        }),
      };
      let res = await fetch(
        `http://localhost:5000/users/${e.target.id.value}`,
        options
      );
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      location.reload();
    } catch (err) {
      let message = err.statusText || "Ocurrio un Error";
      form.insertAdjacentHTML(
        "afterend",
        `<p><b>Error ${err.status}: ${message}</b></p>`
      );
    }
  }
});

document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("edit")) {
    title.textContent = "Editar Usuario";
    form.nombre.value = e.target.dataset.nombre;
    form.edad.value = e.target.dataset.edad;
    form.email.value = e.target.dataset.email;
    form.telefono.value = e.target.dataset.telefono;
    form.id.value = e.target.dataset.id;
  }
  if (e.target.classList.contains("delete")) {
    let isDelete = confirm(
      `¿Estas seguro de Eliminar "${e.target.dataset.nombre}"?`
    );
    if (isDelete) {
      try {
        let options = {
          method: "DELETE",
          headers: { "Content-type": "application/json; charset=utf-8" },
        };
        let res = await fetch(
          `http://localhost:5000/users/${e.target.dataset.id}`,
          options
        );
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
        location.reload();
      } catch (err) {
        let message = err.statusText || "Ocurrio un Error";
        form.insertAdjacentHTML(
          "afterend",
          `<p><b>Error ${err.status}: ${message}</b></p>`
        );
      }
    }
  }
});

// ? json-server -w -p 5000 JavaScript\ \@Jonmircha/Crud/db.json

// # DOM
const table = document.querySelector(".crud-table");
const form = document.querySelector(".crud-form");
const title = document.querySelector(".crud-title");
const tbody = document.querySelector(".crud-tbody");
const fragment = document.createDocumentFragment();

// # AJAX
const ajax = (options) => {
  let { url, method, success, error, data } = options;
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      success(json);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open(method || "GET", url);
  // $ Enviar paramentros en header json
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  // $ Enviar en text
  xhr.send(JSON.stringify(data));
};

const getAll = () => {
  // $ SELECT - GET
  ajax({
    url: "http://localhost:5000/users",
    method: "GET",
    success: (res) => {
      console.log(res);
      res.forEach((el) => {
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
    },
    error: (err) => {
      console.error(err);
      table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
    },
  });
};

// # EVENTOS
document.addEventListener("DOMContentLoaded", getAll);

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!e.target.id.value) {
    // $ CREATE - POST
    ajax({
      url: "http://localhost:5000/users",
      method: "POST",
      success: () => {
        location.reload();
      },
      error: (err) => {
        form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      },
      data: {
        nombre: e.target.nombre.value,
        edad: e.target.edad.value,
        email: e.target.email.value,
        telefono: e.target.telefono.value,
      },
    });
  } else {
    // $ UPDATE - PUT
    ajax({
      url: `http://localhost:5000/users/${e.target.id.value}`,
      method: "PUT",
      success: () => {
        location.reload();
      },
      error: (err) => {
        form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
      },
      data: {
        nombre: e.target.nombre.value,
        edad: e.target.edad.value,
        email: e.target.email.value,
        telefono: e.target.telefono.value,
      },
    });
  }
});

document.addEventListener("click", (e) => {
  // $ EDIT
  if (e.target.classList.contains("edit")) {
    title.textContent = "Editar Usuario";
    form.nombre.value = e.target.dataset.nombre;
    form.edad.value = e.target.dataset.edad;
    form.email.value = e.target.dataset.email;
    form.telefono.value = e.target.dataset.telefono;
    form.id.value = e.target.dataset.id;
  }
  // $ DELETE
  if (e.target.classList.contains("delete")) {
    let isDelete = confirm(
      `¿Estas seguro de Eliminar "${e.target.dataset.nombre}"?`
    );
    if (isDelete) {
      ajax({
        url: `http://localhost:5000/users/${e.target.dataset.id}`,
        method: "DELETE",
        success: () => {
          location.reload();
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }
});

// ? json-server -w -p 5000 JavaScript\ \@Jonmircha/Crud/db.json

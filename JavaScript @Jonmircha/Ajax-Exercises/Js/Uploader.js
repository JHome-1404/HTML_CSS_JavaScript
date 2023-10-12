const main = document.querySelector("main");
const constainer = document.querySelector(".container");
const files = document.getElementById("files");
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const uploader = (file) => {
  const xhr = new XMLHttpRequest();
  const formData = new FormData();
  formData.append("file", file);

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      console.log(json);
    } else {
      let message = xhr.statusText || "Ocurrio un error";
      console.error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.open("POST", "./Assets/Uploader.php");
  xhr.setRequestHeader("enc-type", "multipart/form-data");
  xhr.send(formData);
};

document.addEventListener("change", (e) => {
  if (e.target === files) {
    const file = Array.from(e.target.files);
    file.forEach((el) => uploader(el));
  }
});

// ? Convertir un objeto no iterable en un objeto iterable con array.from
// ! NO FUNCIONA - CODIGO FUNCIONAL EN LA CARPETA HTDOCS EN XAMMP

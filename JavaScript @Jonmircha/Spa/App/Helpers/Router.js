import api from "./wp_api.js";
import { ajax } from "./Ajax.js";
import { postCard } from "../Components/PostCard.js";
import { post } from "../Components/Post.js";

export const router = async () => {
  let { hash } = location;
  let main = document.getElementById("main");
  let loader = document.querySelector(".loader");

  main.innerHTML = null;
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      success: (json) => {
        let html = "";
        let number = 10;
        json.forEach((e) => {
          html += postCard(e, number++);
        });
        main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    main.innerHTML = `<h2>Seccion del Buscador</h2>`;
  } else if (hash === "#/contact") {
    main.innerHTML = `<h2>Seccion del Contacto</h2>`;
  } else {
    await ajax({
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      success: (json) => {
        main.innerHTML = post(json);
      },
    });
  }
  loader.style.display = "none";
};

// ? Tener en cuenta el flujo de bloqueo de los await para los loaders y siempre guardar un enlace en el enrutamiento

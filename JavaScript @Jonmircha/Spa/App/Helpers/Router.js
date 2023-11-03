import api from "./wp_api.js";
import { ajax } from "./Ajax.js";
import { postCard } from "../Components/PostCard.js";
import { post } from "../Components/Post.js";
import { searchCard } from "../Components/SearchCard.js";
import { contactForm } from "../Components/ContactForm.js";

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
        json.forEach((post) => {
          html += postCard(post, number++);
        });
        main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) {
      loader.style.display = "none";
      return false;
    }
    await ajax({
      url: `${api.SEARCH}${query}`,
      success: (json) => {
        let html = "";
        if (json.length === 0) {
          html = `
          <p class="error">
            No Existen resultados de busqueda para ${query}
          </p>
          `;
        } else {
          json.forEach((post) => (html += searchCard(post)));
        }
        main.innerHTML = html;
      },
    });
  } else if (hash === "#/contact") {
    main.appendChild(contactForm());
  } else {
    let query = localStorage.getItem("wpPostId");
    await ajax({
      url: `${api.POST}/${query}`,
      success: (json) => {
        main.innerHTML = post(json);
      },
    });
  }
  loader.style.display = "none";
};

// ? Tener en cuenta el flujo de bloqueo de los await para los loaders y siempre guardar un enlace en el enrutamiento

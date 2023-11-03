import api from "./wp_api.js";
import { postCard } from "../Components/PostCard.js";
import { searchCard } from "../Components/SearchCard.js";
import { ajax } from "./Ajax.js";

export const infiniteScroll = async () => {
  let query = localStorage.getItem("wpSearch");
  let apiURL;
  let Component;

  window.addEventListener("scroll", async () => {
    let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    let { hash } = window.location;
    let scrollTopRound = Math.round(scrollTop);

    if (scrollTopRound + clientHeight >= scrollHeight) {
      api.page++;

      if (!hash || hash === "#/") {
        apiURL = `${api.POSTS}&page=${api.page}`;
        Component = postCard;
      } else if (hash.includes("#/search")) {
        apiURL = `${api.SEARCH}${query}&page=${api.page}`;
        Component = searchCard;
      } else {
        return false;
      }

      document.querySelector(".loader").style.display = "block";

      await ajax({
        url: apiURL,
        success: (json) => {
          console.log(json);
          let html = "";
          json.forEach((post) => (html += Component(post)));
          document.getElementById("main").insertAdjacentHTML("beforeend", html);
          document.querySelector(".loader").style.display = "none";
        },
      });
    }
  });
};

// ? High Order Components HOC - REACT
// ? margin de top + tamaño body >= ventana completa del navegador

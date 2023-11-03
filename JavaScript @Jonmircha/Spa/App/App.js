import { loader } from "./Components/Loader.js";
import { header } from "./Components/Header.js";
import { main } from "./Components/Main.js";
import { router } from "./Helpers/Router.js";
import { infiniteScroll } from "./Helpers/InfiniteScroll.js";

export const App = () => {
  const root = document.getElementById("root");
  root.innerHTML = null;

  root.appendChild(header());
  root.appendChild(main());
  root.appendChild(loader());

  router();
  infiniteScroll();
};

// ? Limpiar root para evitar duplicacion

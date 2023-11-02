import { menu } from "./Menu.js";
import { searchForm } from "./SearchForm.js";
import { title } from "./Title.js";

export const header = () => {
  const header = document.createElement("header");
  header.classList.add("header");
  header.appendChild(title());
  header.appendChild(menu());
  header.appendChild(searchForm());
  return header;
};

import api from "../Helpers/wp_api.js";

export const title = () => {
  const h2 = document.createElement("h2");
  h2.innerHTML = `
  <a href="${api.DOMAIN}" target="_blank" rel="noopener">
    ${api.NAME.toUpperCase()}
  </a>
  `;
  return h2;
};

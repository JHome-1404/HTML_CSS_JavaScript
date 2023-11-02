export const postCard = (props, number) => {
  let { title, date, slug, _embedded, id } = props;
  let dateFormat = new Date(date).toLocaleString();
  let urlPoster = _embedded["wp:featuredmedia"]
    ? _embedded["wp:featuredmedia"][0].source_url
    : `https://picsum.photos/id/${number}/200/300`;

  document.addEventListener("click", (e) => {
    if (!e.target.matches(".post-card a")) return false;
    localStorage.setItem("wpPostId", e.target.dataset.id);
  });

  return `
  <article class="post-card">
    <img src="${urlPoster}" alt="${title.rendered}">
    <h2>${title.rendered}</h2>
    <p>
      <time datetime="${dateFormat}">${dateFormat}</time>
      <a href="#/${slug}" data-id="${id}">Ver Publicacion</a>
    </p>
  </article>
  `;
};

// ? TIPS: para poner imagen ramdom usar esta endpoint
// https://picsum.photos/

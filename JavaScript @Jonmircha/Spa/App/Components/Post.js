export const post = (prop) => {
  let { title, date, content } = prop;
  let dateFormat = new Date(date).toLocaleString();

  return `
  <section class="post-page">
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="${dateFormat}">${dateFormat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
  </section>
  `;
};

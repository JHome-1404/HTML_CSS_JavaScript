const NAME = `css-tricks`;
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/v2`;
const POSTS = `${API_WP}/posts?_embed`;
const POST = `${API_WP}/posts`;
const CATEGORIES = `${API_WP}/categories`;
const SEARCH = `${API_WP}/search?_embed&search=`;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  POSTS,
  POST,
  CATEGORIES,
  SEARCH,
};

// ? API de wordpress

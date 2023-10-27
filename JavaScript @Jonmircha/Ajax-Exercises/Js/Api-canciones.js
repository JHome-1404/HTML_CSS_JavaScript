const form = document.getElementById("song-search");
const loader = document.querySelector(".loader");
const errors = document.querySelector(".errors");
const artistContet = document.querySelector(".artist");
const songContent = document.querySelector(".song");

const getJson = async (endpoints) => {
  try {
    let res = await fetch(endpoints);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let json = await res.json();
    return json;
  } catch (err) {
    loader.style.display = "none";
    let message = err.statusText || "Ocurrio un Error";
    errors.innerHTML += `<p>Error ${err.status}: ${message} - ${endpoints}</p>`;
  }
};

const getEndPoints = async (endpoints, artist, song) => {
  loader.style.display = "block";
  let res = endpoints.map(getJson);
  let [artistJson, songJson] = await Promise.all(res);
  console.log(artistJson);
  loader.style.display = "none";
  if (!isNaN(artistJson)) {
    artistContet.innerHTML = `<h2>No se encotro el artista ${artist}</h2>`;
  } else {
    let artist = artistJson.artists[0];
    artistContet.innerHTML = `
      <h2>${artist.strArtist}</h2> 
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}"> 
      <p>${artist.intBornYear} - ${artist.intDiedYear || "Vivo"}</p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGenre} - ${artist.strStyle}</p>
      <a href="${artist.strWebsite ? artist.strArtist : "#"}" target="_blank">${
      artist.strWebsite ? "Sitio Web" : ""
    }</a>
      <p>${artist.strBiographyEN}</p>
    `;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let artist = e.target.artist.value;
  let song = e.target.song.value;
  const endPoints = [
    `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
    `https://api.lyrics.ovh/v1/${artist}/${song}`,
  ];
  getEndPoints(endPoints, artist, song);
});

// ! INCOMPLETO

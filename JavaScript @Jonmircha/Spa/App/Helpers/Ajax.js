export const ajax = async (props) => {
  let { url, success } = props;
  try {
    let resUrl = url;
    let res = await fetch(resUrl);
    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
        statusUrl: res.url,
      };
    let json = await res.json();
    success(json);
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    document.getElementById("main").innerHTML = `
    <div class="error">
      <p>Error ${err.status}: ${message} - Url: ${err.statusUrl}</p>
    </div>
    `;
    document.querySelector(".loader").style.display = "none";
    console.error(`Error ${err.status}: ${message}`);
  }
};

import stripeKeys from "../Assets/Stripe-keys.js";

const menu = document.querySelector(".menu");
const fragment = document.createDocumentFragment();

let products, prices;
const fetchOptions = {
  headers: { Authorization: `Bearer ${stripeKeys.secret}` },
};
const endPoints = [
  "https://api.stripe.com/v1/products",
  "https://api.stripe.com/v1/prices",
];

const moneyFormat = (num) => `$${num.slice(0, -2)},${num.slice(-2)}`;

const getJson = async (endpoints) => {
  try {
    const res = await fetch(endpoints, fetchOptions);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    let message = err.statusText || "Ocurrio un Error";
    console.error(`Error ${err.status}: ${message}`);
  }
};

const getEndPoints = async (endpoints) => {
  try {
    const res = endpoints.map(getJson);
    const json = await Promise.all(res);
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((el) => {
      let productData = products.filter((product) => product.id === el.product);

      let burguer = document.createElement("figure");
      burguer.setAttribute("data-price", el.id);
      burguer.classList.add("burguer");
      burguer.innerHTML = `
      <div class="img"></div>
      <figcaption>
        <p class="name">${productData[0].name}</p>
        <p class="price">${moneyFormat(el.unit_amount_decimal)} ${
        el.currency
      }</p>
      </figcaption>
      `;
      burguer.querySelector(
        ".img"
      ).style.backgroundImage = `url(${productData[0].images[0]})`;
      burguer
        .querySelector(".img")
        .setAttribute("data-alt", productData[0].name);
      fragment.appendChild(burguer);
    });
    menu.appendChild(fragment);
  } catch (err) {
    console.error(err);
  }
};

menu.addEventListener("click", async (e) => {
  if (e.target.classList.contains("burguer")) {
    let priceId = e.target.getAttribute("data-price");
    let options = {
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      successUrl:
        "http://127.0.0.1:5500/Ajax-Exercises/Assets/Stripe.success.html",
      cancelUrl:
        "http://127.0.0.1:5500/Ajax-Exercises/Assets/Stripe.cancel.html",
    };
    Stripe(stripeKeys.public)
      .redirectToCheckout(options)
      .then((res) => {
        console.log(res);
        if (res.error) {
          menu.insertAdjacentElement("afterend", res.error.message);
        }
      });
  }
});

getEndPoints(endPoints);
// ? Si no se colocoa nada en un elemento no se puede subir el fragmento tocaria usar importNode
// ? https://designcode.io/advanced-react-hooks-handbook-stripe-checkout-client-only solucion para error de clientes

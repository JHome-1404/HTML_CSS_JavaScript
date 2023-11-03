export const contactForm = () => {
  const styles = document.getElementById("dynamic-styles");
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.autocomplete = "off";

  form.innerHTML = `
  <input
    type="text"
    name="name"
    placeholder="Escribe tu Nombre..."
    title="Nombre solo acepta letras y espacios en blanco"
    pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$"
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Escribe tu Email..."
    title="Email Invalido"
    pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
    required
  />
  <input
    type="text"
    name="subject"
    placeholder="Asunto..."
    title="El Asunto es requerido"
    required
  />
  <textarea
    name="comments"
    placeholder="Escribe tus Comentarios..."
    title="Tu comentario no debe exceder los 255 catacteres"
    data-pattern="^.{1,255}$"
    required
  ></textarea>
  <button type="submit">Enviar</button>
  <div class="contact-form-loader none">
    <img src="App/Assets/loader.svg" alt="Cargando" />
  </div>
  <div class="contact-form-response none">
    <p>Los datos han sido enviados</p>
  </div>
  <input
    type="hidden"
    name="_next"
    value="http://127.0.0.1:5500/JavaScript%20@Jonmircha/Html/Dom/Dom-Ejercicios.html"
  />
  <input type="hidden" name="_captcha" value="false" />
  `;

  styles.innerHTML = `
  .contact-form {
    --form-valid: #008000;
    --form-invalid: #ff0000;
    width: 60%;
    margin: 0px auto;
    text-align: center;
  }
  
  .contact-form > * {
    padding: 0.5em;
    margin: 1rem auto;
    display: block;
    width: 100%;
    outline: none;
  }
  
  .contact-form textarea {
    height: 15em;
    resize: none;
  }
  
  .contact-form-response {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .contact-form button[type="submit"] {
    width: 50%;
    font-weight: bold;
    cursor: pointer;
  }
  
  .contact-form *::placeholder {
    color: var(--second-color);
  }
  
  .contact-form *[required]:valid {
    border: thin solid var(--form-valid);
  }
  
  .contact-form *[required]:invalid {
    border: thin solid var(--form-invalid);
  }
  
  .contact-form-loader img {
    width: 4em;
  }
  
  .contact-form-error {
    background-color: var(--form-invalid);
    color: #fff;
    margin-top: -1rem;
    font-size: 80%;
    transition: all 800ms ease;
  }
  
  .contact-form-error.is-active {
    display: block;
    animation: show-message 1s 1 normal 0s ease both;
  }
  
  .none {
    display: none;
  }
  
  @keyframes show-message {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 960px) {
    .contact-form {
      width: 90%;
    }
  }
  `;

  const validationsForm = () => {
    const form = document.querySelector(".contact-form");
    const inputs = document.querySelectorAll(".contact-form [required]");

    inputs.forEach((input) => {
      const span = document.createElement("span");
      span.id = input.name;
      span.textContent = input.title;
      span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", span);
    });

    document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let input = e.target,
          pattern = input.pattern || input.dataset.pattern;
        if (pattern && input.value != "") {
          let regex = new RegExp(pattern);
          if (!regex.exec(input.value)) {
            return document
              .getElementById(input.name)
              .classList.add("is-active");
          } else {
            return document
              .getElementById(input.name)
              .classList.remove("is-active");
          }
        }
        if (!pattern) {
          if (input.value === "") {
            return document
              .getElementById(input.name)
              .classList.add("is-active");
          } else {
            return document
              .getElementById(input.name)
              .classList.remove("is-active");
          }
        }
      }
    });

    document.addEventListener("submit", async (e) => {
      e.preventDefault();
      const loader = document.querySelector(".contact-form-loader");
      const response = document.querySelector(".contact-form-response");

      loader.classList.remove("none");

      try {
        let resURl = "https://formsubmit.co/ajax/jesushome1404@gmail.com";
        let res = await fetch(resURl, {
          method: "POST",
          body: new FormData(e.target),
        });
        let json = await res.json();
        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        loader.classList.remove("none");
        setTimeout(() => {
          response.classList.remove("none");
          response.innerHTML = `<p>${json.message}</p>`;
        }, 1000);
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Ocurrio un Error";
        setTimeout(() => {
          response.classList.remove("none");
          response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        }, 2000);
      } finally {
        setTimeout(() => {
          form.reset();
          loader.classList.add("none");
          response.classList.add("none");
          response.innerHTML = "";
        }, 4000);
      }
    });
  };

  // ? Para que carge el dom primero
  setTimeout(() => {
    validationsForm();
  }, 100);

  return form;
};

// ? Single File Components
// ? Styled Components
// ! NO ESTANDAR - MEJOR NO USAR ESTE TIPO DE COMPONENTES

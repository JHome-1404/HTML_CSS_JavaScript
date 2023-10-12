const contactForm = () => {
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
          return document.getElementById(input.name).classList.add("is-active");
        } else {
          return document
            .getElementById(input.name)
            .classList.remove("is-active");
        }
      }
      if (!pattern) {
        if (input.value === "") {
          return document.getElementById(input.name).classList.add("is-active");
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
      let resURl = "Assets/Send-mail.php";
      // let resURl = "https//jonmircha.com/send_mail.php";
      let res = await fetch(resURl, {
        method: "POST",
        body: new FormData(e.target),
        mode: "cors",
      });

      if (!res.ok) throw { status: res.status, statusText: res.statusText };

      let json = await res.json();
      loader.classList.remove("none");
      setTimeout(() => {
        response.classList.remove("none");
        response.innerHTML = `<p>${json.message}</p>`;
      }, 2000);
    } catch (err) {
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

document.addEventListener("DOMContentLoaded", contactForm);

// # MENU
export default function menuHamburguesa(btn, panel, logo) {
  btn.addEventListener("click", () => {
    panel.classList.toggle("is-active");
    btn.classList.toggle("is-active");
  });

  panel.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      panel.classList.remove("is-active");
      btn.classList.remove("is-active");
    }
  });

  logo.addEventListener("click", () => {
    setTimeout(() => {
      location.reload();
    }, 1000);
  });
}

// # RELOJ DIGITAL
const opcionesDeFormato = { hour12: false };
let clockTempo = undefined;
export const digitalClock = (clock, btn_start, btn_stop) => {
  btn_start.addEventListener("click", (e) => {
    clockTempo = setInterval(() => {
      let clockHour = new Date().toLocaleTimeString(
        undefined,
        opcionesDeFormato
      );
      clock.textContent = `${clockHour}`;
    }, 1000);
    e.target.disabled = true;
  });

  btn_stop.addEventListener("click", () => {
    clearInterval(clockTempo);
    clock.textContent = `0:00:00`;
    btn_start.disabled = false;
  });
};

export const alarma = (sound, btn_Play, btn_Stop) => {
  btn_Play.addEventListener("click", (e) => {
    sound.play();
    sound.loop = true;
    e.target.disabled = true;
  });
  btn_Stop.addEventListener("click", () => {
    sound.pause();
    sound.currentTime = 0;
    btn_Play.disabled = false;
  });
};

// # TECLADO (SHORTCUTS)
export const shortCuts = (e) => {
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(`Ctrl: ${e.ctrlKey}`);
  // console.log(`Alt: ${e.altKey}`);
  // console.log(`Shift; ${e.shiftKey}`);
  if (e.keyCode == 65 && e.ctrlKey) {
    alert("Hello Developer 👋");
  }
  if (e.keyCode == 67 && e.ctrlKey) {
    let question = confirm("You Wanna be my Girlfriend?");
    if (question == false) {
      alert("🖕");
    } else {
      alert("😘");
    }
  }
  if (e.keyCode == 80 && e.ctrlKey) {
    prompt("Lana o Mia? 🤔");
  }
};
// ! Para mejor entendimiendo del teclado con key pero si deseas incluir mayusculas usa KeyCode

// # TECLADO (MOVIMIENTOS & COLISIONES)
let x = 0;
let y = 0;
export const moveBall = (e, ball, stage) => {
  let limitBall = ball.getBoundingClientRect();
  let limitStage = stage.getBoundingClientRect();
  switch (e.keyCode) {
    // ? TOP
    case 38:
      if (limitBall.top > limitStage.top + 10) {
        e.preventDefault();
        y--;
      }
      break;
    // ? BOTTOM
    case 40:
      if (limitBall.bottom + 10 < limitStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    // ? LEFT
    case 37:
      if (limitBall.left > limitStage.left + 15) {
        e.preventDefault();
        x--;
      }
      break;
    // ? RIGHT
    case 39:
      if (limitBall.right + 15 < limitStage.right) {
        e.preventDefault();
        x++;
      }
      break;
  }
  ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
};
// ? Prevenir las acciones a teclas especificas

// # COUNTDOWN
export const countDown = (coundDown, limitDate, fechaContent) => {
  fechaContent.textContent = `Fecha Limite ${limitDate}`;
  const countDownDate = new Date(limitDate).getTime();
  let coundDownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countDownDate - now,
      // ? Milisegundos, segundos , minutos, dias
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      // ? Slice primero 2 digitos desde la derecha
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    coundDown.textContent = `Faltan: ${days} Dias, ${hours} Horas, ${minutes} Minutos, ${seconds} Segundos`;
    if (limitTime < 0) {
      clearInterval(coundDownTempo);
      coundDown.textContent = "Feliz Cumpleaños Developer 🥳🥳";
    }
  }, 1000);
};

// # SCROLL BTN
export const scrollTopBtn = (btn) => {
  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 800) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });
  btn.addEventListener("click", () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
};

// # DARK/LIGHT
export const darkTheme = (btn, classDark) => {
  let selectors = document.querySelectorAll("[data-dark]"),
    moon = "🌑",
    sun = "☀️";
  btn.addEventListener("click", (e) => {
    let btnContent = e.target.textContent;
    if (btnContent == moon) {
      darkMode();
    } else {
      lighMode();
    }
  });
  const darkMode = () => {
    selectors.forEach((i) => {
      i.classList.add(classDark);
      btn.textContent = sun;
    });
    localStorage.setItem("theme", "dark");
  };
  const lighMode = () => {
    selectors.forEach((i) => {
      i.classList.remove(classDark);
      btn.textContent = moon;
    });
    localStorage.setItem("theme", "light");
  };
  // # LOCAL STORAGE
  document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") == null)
      localStorage.setItem("theme", "light");
    if (localStorage.getItem("theme") == "light") lighMode();
    if (localStorage.getItem("theme") == "dark") darkMode();
  });
};
// ? Mejora esta opcion usar los root de las paginas css, reemplazando las variables pricipales del root y cambiando nuevamente
// ? cookies (menor capicidad de almacenamiento ) y localStorge

// # RESPONSIBLE RESPONSIVE DESIGN
export const resposiveMedia = (element, mq, mobileContent, desktopContent) => {
  let breakpoint = window.matchMedia(mq);
  const resposive = (e) => {
    if (e.matches) {
      element.innerHTML = desktopContent;
    } else {
      element.innerHTML = mobileContent;
    }
  };
  breakpoint.addListener(resposive);
  resposive(breakpoint);
};

// ? Para los cambios de tamaño y para cargar auto
// ? Se puede con window.resize o con window.matchmedia

// # RESPONSIVE TESTER
export const resposiveTester = (form, btnClose) => {
  let tester;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tester = open(
      form.dirrecion.value,
      "tester",
      `innerWidth:${form.ancho.value},innerHeight:${form.alto.value}`
    );
  });
  btnClose.addEventListener("click", () => {
    tester.close();
  });
};

// # DETECCION DISPOSITIVOS
export const userDeviceInfo = (e) => {
  const isMobile = {
    android: navigator.userAgent.match(/android/i),
    ios: navigator.userAgent.match(/iphone|ipad|ipod/i),
    windows: navigator.userAgent.match(/windows phone/i),
    any: function () {
      return this.android || this.ios || this.windows;
    },
  };
  const isDesktop = {
    linux: navigator.userAgent.match(/linux/i),
    mac: navigator.userAgent.match(/mac os/i),
    windows: navigator.userAgent.match(/windows nt/i),
    any: function () {
      return this.linux || this.mac || this.windows;
    },
  };
  const isBrowser = {
    chrome: navigator.userAgent.match(/chrome/i),
    safari: navigator.userAgent.match(/safari/i),
    firefox: navigator.userAgent.match(/firefox/i),
    opera: navigator.userAgent.match(/opera|opera mini| opera gx/i),
    ie: navigator.userAgent.match(/msie|iemobile/i),
    edge: navigator.userAgent.match(/edge/i),
    any: function () {
      return (
        this.chrome ||
        this.safari ||
        this.firefox ||
        this.opera ||
        this.ie ||
        this.edge
      );
    },
  };
  // console.log(navigator.userAgent);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isBrowser.chrome());
  e.innerHTML = `
    <p>User Agent: <b>${navigator.userAgent}</b></p>
    <p>Plataforma: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></p>
    <p>Navegador: <b>${isBrowser.any()}</b></p>`;

  // ? Contenido Exclusivo
  if (isBrowser.edge) {
    e.innerHTML += `<p><mark>Este Contenido solo se ve en Edge</mark></p>`;
  }
  if (isBrowser.chrome) {
    e.innerHTML += `<p><mark>Este Contenido solo se ve en Chrome</mark></p>`;
  }
  if (isDesktop.linux) {
    e.innerHTML += `<p><mark>Descarga para Linux</mark></p>`;
  }
  if (isDesktop.mac) {
    e.innerHTML += `<p><mark>Descarga para Mac OS</mark></p>`;
  }
  if (isDesktop.windows) {
    e.innerHTML += `<p><mark>Descarga para Windows</mark></p>`;
  }
  // ? Redirreciones
  // if (isMobile.android) {
  //   location.href = "https://jonmircha.com/";
  // }
};
// ? Sitemas exclusivos para plataforma y navegadores web

// # NETWORK STATUS
export const networkStatus = () => {
  const div = document.createElement("div");
  const isOnline = () => {
    if (navigator.onLine) {
      div.textContent = "Conexion Restablecida";
      div.classList.add("online");
      div.classList.remove("offline");
    } else {
      div.textContent = "Conexion Perdida";
      div.classList.add("offline");
      div.classList.remove("online");
    }
    document.body.insertAdjacentElement("beforeend", div);
    setTimeout(() => {
      document.body.removeChild(div);
    }, 2000);
  };
  window.addEventListener("online", () => {
    isOnline();
  });
  window.addEventListener("offline", () => {
    isOnline();
  });
};

// # DETECCION WEB CAM
export const webCam = (element) => {
  if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream);
        element.srcObject = stream;
        element.play();
      })
      .catch((err) => {
        element.insertAdjacentHTML(
          "beforebegin",
          `<p>Sucedio el siguiente error: <mark>${err}</mark></p>`
        );
      });
  }
};
// ? Igual a una promesa

// # GEOLOCALIZACION
export const getGeolocation = (element) => {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = (position) => {
    let coords = position.coords;
    element.innerHTML = `
    <p>Tu posicion actual es:</p>
    <p>Latitud: <b>${coords.latitude}</b></p>
    <p>Longitud: <b>${coords.longitude}</b></p>
    <p>Presicion: <b>${coords.accuracy}</b> metros</p>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" ref="noopener">Ver en Google Maps</a>;
    `;
  };
  const error = (err) => {
    element.innerHTML = `<p>Error: <mark>${err.message}</mark></p>`;
  };
  navigator.geolocation.getCurrentPosition(success, error, options);
};

// # SEARCH FILTER
export const searchFilters = (input, selector) => {
  input.addEventListener("keyup", (e) => {
    let input_text = e.target.value.toLowerCase();
    if (e.key === "Escape") e.target.value = "";
    selector.forEach((el) => {
      let selector_text = el.textContent.toLowerCase();
      selector_text.includes(input_text)
        ? el.classList.remove("filter")
        : el.classList.add("filter");
    });
  });
};

// # SORTEO DIGITAL
export const lotteryGenerator = (btn, selector) => {
  const getWinner = (select) => {
    const random = Math.floor(Math.random() * select.length);
    const winner = select[random];
    return `El Ganador es: ${winner.textContent}`;
  };
  btn.addEventListener("click", (e) => {
    let result = getWinner(selector);
    alert(result);
  });
};

// # SLIDER
export const slider = (nextBtn, prevBtn, slides) => {
  let i = 0;
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slides[i].classList.remove("active");
    i--;
    if (i < 0) {
      i = slides.length - 1;
    }
    slides[i].classList.add("active");
  });
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    slides[i].classList.remove("active");
    i++;
    if (i > slides.length - 1) {
      i = 0;
    }
    slides[i].classList.add("active");
  });
};

// # SCROLLSPY
export const scrollSpy = () => {
  let data_darks = document.querySelectorAll("section[data-scroll-spy]");
  const callback = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.add("active");
      } else {
        document
          .querySelector(`a[data-scroll-spy][href="#${id}"]`)
          .classList.remove("active");
      }
    });
  };
  const observer = new IntersectionObserver(callback, {
    // ? Margen de observacion
    // rootMargin: "-300px",
    // ? 50% del objeto observado
    threshold: 0.5,
    // ? 50%  y 70% del objeto observado
    threshold: [0.5, 0.75],
  });
  // console.log(observer);
  data_darks.forEach((e) => observer.observe(e));
};

// # STOCKVIDEO
export const smartVideo = () => {
  const stockVideos = document.querySelectorAll(".stock-video");
  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
        // entry.target.muted = false;
        entry.target.controls = true;
      } else {
        entry.target.pause();
        entry.target.controls = false;
        // entry.target.currentTime = 0;
      }
      window.addEventListener("visibilitychange", (e) => {
        if (document.visibilityState === "visible") {
          entry.target.play();
          // entry.target.muted = false;
          entry.target.controls = true;
        } else {
          entry.target.pause();
          entry.target.controls = false;
          // entry.target.currentTime = 0;
        }
      });
    });
  };
  const observer = new IntersectionObserver(callback, { threshold: 0.8 });
  stockVideos.forEach((e) => observer.observe(e));
};

// # VALIDACION FORMULARIOS
export const contactFormValidations = () => {
  const form = document.querySelector(".contact-form"),
    inputs = document.querySelectorAll(".contact-form [required]");
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
  document.addEventListener("submit", (e) => {
    // e.preventDefault();
    const loader = document.querySelector(".contact-form-loader");
    const response = document.querySelector(".contact-form-response");

    loader.classList.remove("none");

    setTimeout(() => {
      loader.classList.add("none");
      response.classList.remove("none");
      form.reset();
      setTimeout(() => {
        response.classList.add("none");
      }, 3000);
    }, 3000);
  });
};

// # NARRADOR
export const speechReader = () => {
  const speechSelect = document.getElementById("speech-select"),
    speechTextarea = document.getElementById("speech-text"),
    speechBtn = document.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();
  let voices = [];

  speechSynthesis.addEventListener("voiceschanged", () => {
    voices = speechSynthesis.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.value = voice.name;
      option.textContent = `${voice.name} - ${voice.lang}`;
      speechSelect.appendChild(option);
    });
  });
  speechSelect.addEventListener("change", (e) => {
    speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
  });
  speechBtn.addEventListener("click", () => {
    speechMessage.text = speechTextarea.value;
    speechSynthesis.speak(speechMessage);
  });
};

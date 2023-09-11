import menuHamburguesa, {
  alarma,
  contactFormValidations,
  countDown,
  darkTheme,
  digitalClock,
  getGeolocation,
  lotteryGenerator,
  moveBall,
  networkStatus,
  resposiveMedia,
  resposiveTester,
  scrollSpy,
  scrollTopBtn,
  searchFilters,
  shortCuts,
  slider,
  smartVideo,
  speechReader,
  userDeviceInfo,
  webCam,
} from "./Importaciones.js";

// # MENU
const btn = document.querySelector(".panel-btn");
const panel = document.querySelector(".panel");
const logo = document.querySelector(".logo");

// # RELOJ
const clock = document.querySelector(".reloj");
const clockBtn_start = document.querySelector(".activar-reloj");
const clockBtn_stop = document.querySelector(".detener-reloj");

// # ALARMA
const sound = new Audio("/JavaScript @Jonmircha/Sounds/alarma.mp3");
const alarmBtn_start = document.querySelector(".activar-alarma");
const alarmBtn_stop = document.querySelector(".detener-alarma");

// # COUNTDOWN
const count = document.querySelector(".countdown");
const fecha = "April 14,2024 0:00:00";
const fechaContent = document.querySelector(".fecha");

// # SCROLL BTN
const scrollBtn = document.querySelector(".scroll-top-btn");

// # RESPONSIBLE RESPONSIVE DESIGN
const youtubeElement = document.querySelector(".youtube");
const youtubeElement2 = document.querySelector(".youtube2");

// # RESPONSIVE TESTER
const form = document.querySelector(".resposive-tester");
const cerrar = document.querySelector(".cerrar");

// # DETECCION DISPOSITIVOS
const user_device = document.querySelector(".user-device");

// # DETECCION WEB CAM
const webCamContent = document.querySelector(".webcam");

// # GEOLOCALIZACION
const geoLocation = document.querySelector(".geolocation");

// # SEARCH FILTER
const seachInput = document.querySelector(".card-filter");
const tarjetas = document.querySelectorAll(".card");

// # SORTEO DIGITAL
const winner_btn = document.querySelector(".winner-btn");
const item_sorteo = document.querySelectorAll(".item-sorteo");

// # SLIDER
const nextBtn = document.querySelector(".slider-btns .next");
const prevtBtn = document.querySelector(".slider-btns .prev");
const slides = document.querySelectorAll(".slider-slide");

document.addEventListener("DOMContentLoaded", () => {
  menuHamburguesa(btn, panel, logo);
  digitalClock(clock, clockBtn_start, clockBtn_stop);
  alarma(sound, alarmBtn_start, alarmBtn_stop);
  countDown(count, fecha, fechaContent);
  scrollTopBtn(scrollBtn);
  resposiveMedia(
    youtubeElement,
    "(min-width: 1024px)",
    `<a href="https://youtu.be/2SetvwBV-SU?si=h-IKn7dJmKFZW4hk" target="_blank" rel="noopener noreferrer">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=h-IKn7dJmKFZW4hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="noopener noreferrer" allowfullscreen></iframe>`
  );
  resposiveMedia(
    youtubeElement2,
    "(min-width: 1024px)",
    `<a href="https://youtu.be/2SetvwBV-SU?si=h-IKn7dJmKFZW4hk" target="_blank" rel="noopener noreferrer">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=h-IKn7dJmKFZW4hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" rel="noopener noreferrer" allowfullscreen></iframe>`
  );
  resposiveTester(form, cerrar);
  userDeviceInfo(user_device);
  webCam(webCamContent);
  getGeolocation(geoLocation);
  searchFilters(seachInput, tarjetas);
  lotteryGenerator(winner_btn, item_sorteo);
  slider(nextBtn, prevtBtn, slides);
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

// # TECLADO (SHORTCUTS)
// ? keyDown = preionado
// ? keyUp = preionado (Soltar)
// ? keyPress = preionado (Mantener)
// # TECLADO (MOVIMIENTOS & COLISIONES)
const ball = document.querySelector(".ball");
const stage = document.querySelector(".stage");

document.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ball, stage);
});

// # DARK/LIGHT
const btnDark = document.querySelector(".dark-theme-btn");
darkTheme(btnDark, "dark-mode");

// # NETWORK STATUS
networkStatus();

// # NARRADOR
speechReader();

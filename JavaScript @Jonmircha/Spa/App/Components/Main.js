export const main = () => {
  const main = document.createElement("main");
  main.id = "main";

  if (location.hash.includes("#/search")) {
    main.classList.add("grid-fluid02");
  } else {
    main.classList.add("grid-fluid");
  }
  return main;
};

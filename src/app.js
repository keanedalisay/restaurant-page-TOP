import {
  slctrEvent,
  createImgSlider,
  createHomeFrame,
  createMenuFrame,
  createLocationFrame,
} from "./helpers.js";

const App = {
  slctr: {
    overlay: document.querySelector("[data-app='overlay']"),
    navBar: document.querySelector("[data-app='nav-bar']"),
    navMenu: document.querySelector("[data-app='nav-menu']"),

    homeBtns: document.querySelectorAll("[data-app='home-btn']"),
    menuBtns: document.querySelectorAll("[data-app='menu-btn']"),
    locaBtns: document.querySelectorAll("[data-app='loca-btn']"),

    main: document.querySelector('[data-app="main"]'),
    toggleNavMenu() {
      App.slctr.overlay.classList.toggle("show-nav-menu");
      App.slctr.navMenu.classList.toggle("show-nav-menu");
    },
    displayHomeContent() {
      App.slctr.main.innerHTML = "";
      App.slctr.main.appendChild(createImgSlider());
      App.slctr.main.appendChild(createHomeFrame());
    },
    displayMenuContent() {
      App.slctr.main.innerHTML = "";
      App.slctr.main.appendChild(createMenuFrame());
    },
    displayLocationContent() {
      App.slctr.main.innerHTML = "";
      App.slctr.main.appendChild(createLocationFrame());
    },
  },
  bindSlctrEvents() {
    slctrEvent(
      App.slctr.navBar,
      "click",
      "[data-app='nav-menu-btn']",
      App.slctr.toggleNavMenu
    );
    slctrEvent(
      App.slctr.navMenu,
      "click",
      "[data-app='close-menu-btn']",
      App.slctr.toggleNavMenu
    );
  },
  init() {
    App.slctr.homeBtns.forEach((btn) => {
      btn.addEventListener("click", App.slctr.displayHomeContent);
    });

    App.slctr.menuBtns.forEach((btn) => {
      btn.addEventListener("click", App.slctr.displayMenuContent);
    });

    App.slctr.locaBtns.forEach((btn) => {
      btn.addEventListener("click", App.slctr.displayLocationContent);
    });

    App.slctr.displayHomeContent();
    App.bindSlctrEvents();
  },
};

App.init();

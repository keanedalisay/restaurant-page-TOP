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
    navMenu: document.querySelector("[data-app='nav-menu']"),
    navMenuBtn: document.querySelector(["[data-app='nav-menu-btn']"]),
    closeMenuBtn: document.querySelector("[data-app='close-menu-btn']"),

    homeBtns: document.querySelectorAll("[data-app='home-btn']"),
    menuBtns: document.querySelectorAll("[data-app='menu-btn']"),
    locaBtns: document.querySelectorAll("[data-app='loca-btn']"),

    main: document.querySelector('[data-app="main"]'),

    toggleNavMenu() {
      App.slctr.overlay.classList.toggle("show-nav-menu");
      App.slctr.navMenu.classList.toggle("show-nav-menu");
    },
    translateQuote(el) {
      const convFilBtn = document.querySelector(`[data-app='conv-fil-btn']`);
      const convEngBtn = document.querySelector(`[data-app='conv-eng-btn']`);

      const quoteMes = document.querySelector(`[data-app="quote-mes"]`);

      if (el === convEngBtn) {
        convFilBtn.classList.remove("slctd-lang");
        convEngBtn.classList.add("slctd-lang");

        quoteMes.textContent = `Don't give up, you should always be happy. Cause if you are happy, you are giving a positive outlook to all people.`;
        return;
      }
      convFilBtn.classList.add("slctd-lang");
      convEngBtn.classList.remove("slctd-lang");

      quoteMes.textContent = `Huwag kang mag-give up, dapat masaya ka lagi. Kasi pagmasaya ka, nagbibigay ka ng positive outlook sa lahat ng tao.`;
      return;
    },
    displayHomeContent() {
      App.slctr.main.innerHTML = "";
      App.slctr.main.appendChild(createImgSlider());
      App.slctr.main.appendChild(createHomeFrame());

      App.bindSlctrEvents();
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
      App.slctr.main,
      "click",
      "[data-app='conv-fil-btn']",
      App.slctr.translateQuote
    );
    slctrEvent(
      App.slctr.main,
      "click",
      "[data-app='conv-eng-btn']",
      App.slctr.translateQuote
    );
  },
  init() {
    App.slctr.navMenuBtn.addEventListener("click", App.slctr.toggleNavMenu);
    App.slctr.closeMenuBtn.addEventListener("click", App.slctr.toggleNavMenu);

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

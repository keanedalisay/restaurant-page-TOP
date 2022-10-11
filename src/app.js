const App = {
  slctr: {
    overlay: document.querySelector("[data-app='overlay']"),
    navBar: document.querySelector("[data-app='nav-bar']"),
    navMenu: document.querySelector("[data-app='nav-menu']"),
    toggleNavMenu() {
      App.slctr.overlay.classList.toggle("show-nav-menu");
      App.slctr.navMenu.classList.toggle("show-nav-menu");
    },
  },
  slctrEvent(el, event, slctr, handler) {
    el.addEventListener(event, (e) => {
      if (e.target.matches(slctr)) {
        handler();
      }
    });
  },
  bindSlctrEvents() {
    App.slctrEvent(
      App.slctr.navBar,
      "click",
      "[data-app='nav-menu-btn']",
      App.slctr.toggleNavMenu
    );
    App.slctrEvent(
      App.slctr.navMenu,
      "click",
      "[data-app='close-menu-btn']",
      App.slctr.toggleNavMenu
    );
  },
  render() {
    App.bindSlctrEvents();
  },
  init() {
    App.render();
  },
};

App.init();
// add event listener to both navBar and navMenu
// use that event listener to catch the desired child of those elements
// by means of delegation

// execute the handler meant for the element catched

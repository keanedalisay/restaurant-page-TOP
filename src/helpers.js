export function delegateEvent(el, event, slctr, handler) {
  el.addEventListener(event, (e) => {
    if (e.target.matches(slctr)) {
      handler(e.target);
    }
  });
}

export class SliderStore {
  constructor() {
    this.imgs = [
      `../img/roberto's-claude-smile.jpg`,
      `../img/roberto's-food-platter.jpg`,
      `../img/roberto's-lumpia.jpg`,
      `../img/roberto's-meatballs.jpg`,
      `../img/roberto's-siopao.jpg`,
    ];
    this.imgCount = 0;
  }
  slideImg(slideDirection) {
    const imgSlideOne = document.querySelector(`[data-app='img-slide-one']`);
    const imgSlideTwo = document.querySelector(`[data-app='img-slide-two']`);

    slideDirection === "Left" ? this.imgCount-- : this.imgCount++;

    if (this.imgCount > this.imgs.length - 1)
      this.imgCount = this.imgs.length - 1;
    else if (this.imgCount < 0) this.imgCount = 0;

    if (this.imgCount % 2 === 0) {
      imgSlideOne.setAttribute("src", this.imgs[this.imgCount]);
      imgSlideOne.classList.add("show-img");
      imgSlideTwo.classList.remove("show-img");
      return;
    }
    imgSlideTwo.setAttribute("src", this.imgs[this.imgCount]);
    imgSlideTwo.classList.add("show-img");
    imgSlideOne.classList.remove("show-img");
    return;
  }
}

function insertHTML(el, html) {
  el.insertAdjacentHTML("afterbegin", html);
}

export function createImgSlider() {
  const sliderHolder = document.createElement("div");

  sliderHolder.classList.add("img-slider");
  sliderHolder.dataset.app = "img-slider";

  insertHTML(
    sliderHolder,
    ` <img class="img-slide-one anim show-img" data-app="img-slide-one" src="../img/roberto's-claude-smile.jpg"
        alt="Claude Yap, one of the owners of Roberto's, can be seen smiling while serving customers.">
    <img class="img-slide-two anim" data-app="img-slide-two" src="../img/roberto's-food-platter.jpg"
        alt="Claude Yap, one of the owners of Roberto's, can be seen smiling while serving customers.">
    <button class="slide left-btn" data-app="slide-left-btn">
        <svg width="30" height="30" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="a">
                    <path d="m250 139.21h252v473.58h-252z" />
                </clipPath>
            </defs>
            <g clip-path="url(#a)">
                <path
                    d="m254.86 608.81c2.5078 2.5273 5.9141 3.957 9.4727 3.9805 3.5703 0.03125 6.9961-1.4062 9.4688-3.9805l223.34-223.34c2.5312-2.5 3.957-5.9102 3.957-9.4727 0-3.5586-1.4258-6.9688-3.957-9.4688l-223.34-223.39c-2.4805-2.6523-5.9297-4.1836-9.5625-4.2422-3.6328-0.0625-7.1328 1.3555-9.6992 3.9219-2.5703 2.5703-3.9844 6.0703-3.9258 9.6992 0.0625 3.6328 1.5938 7.0859 4.2461 9.5664l213.87 213.91-213.87 213.87c-2.5234 2.5078-3.9414 5.9141-3.9414 9.4727 0 3.5547 1.418 6.9648 3.9414 9.4688z" />
            </g>
        </svg>
    </button>
    <button class="slide right-btn" data-app="slide-right-btn">
        <svg width="30" height="30" version="1.1" viewBox="0 0 752 752" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="a">
                    <path d="m250 139.21h252v473.58h-252z" />
                </clipPath>
            </defs>
            <g clip-path="url(#a)">
                <path
                    d="m254.86 608.81c2.5078 2.5273 5.9141 3.957 9.4727 3.9805 3.5703 0.03125 6.9961-1.4062 9.4688-3.9805l223.34-223.34c2.5312-2.5 3.957-5.9102 3.957-9.4727 0-3.5586-1.4258-6.9688-3.957-9.4688l-223.34-223.39c-2.4805-2.6523-5.9297-4.1836-9.5625-4.2422-3.6328-0.0625-7.1328 1.3555-9.6992 3.9219-2.5703 2.5703-3.9844 6.0703-3.9258 9.6992 0.0625 3.6328 1.5938 7.0859 4.2461 9.5664l213.87 213.91-213.87 213.87c-2.5234 2.5078-3.9414 5.9141-3.9414 9.4727 0 3.5547 1.418 6.9648 3.9414 9.4688z" />
            </g>
        </svg>
    </button>`
  );
  return sliderHolder;
}

export function createHomeFrame() {
  const frame = document.createElement("div");
  frame.classList.add("frame");

  insertHTML(
    frame,
    `
  <div class="holder label">
        <span class="subtitle">Featured Items</span>
    </div>
    <div class="holder feat-items">
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/queen-siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Queen Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">King Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/meatball.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Meatballs on Stick</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/spring-rolls.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Spring Rolls</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/halo-halo.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Halo-Halo</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/chkn-sotanghon.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Chicken Sotanghon</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
    </div>
    <div class="holder label">
        <span class="subtitle">Our Tribute</span>
    </div>
    <div class="holder tribute">
        <div class="holder trib-img">
            <img src="../img/claude-yap.jpg" alt="Claude Yap posing for a picture while holding a Queen Siopao.">
        </div>
        <div class="holder trib-mes">
            <div class="holder conv-lang-btn" data-app="conv-lang-btn">
                <button class="conv-fil-btn slctd-lang" data-app="conv-fil-btn" tabindex="0">
                    Fil
                </button>
                <button class="conv-eng-btn" data-app="conv-eng-btn" tabindex="0">
                    Eng
                </button>
            </div>
            <div class="holder quote">
                <span class="quote-mes" data-app="quote-mes">Huwag kang mag-give up, dapat masaya ka lagi. Kasi pagmasaya ka,
                    nagbibigay
                    ka ng positive
                    outlook sa lahat ng tao.</span>
                <span class="quote-author">- Claude Yap</span>
            </div>
        </div>
    </div>
  `
  );
  return frame;
}

export function createMenuFrame() {
  const frame = document.createElement("div");
  frame.classList.add("frame");

  insertHTML(
    frame,
    `<div class="holder label">
        <span class="subtitle">All-Out Menu</span>
    </div>
    <div class="holder feat-items">
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/queen-siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Queen Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">King Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object class="jumbo" data="../img/siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Jumbo Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object class="reg" data="../img/siopao.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Regular Siopao</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/meatball.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Meatballs on Stick</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/spring-rolls.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Spring Rolls</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/halo-halo.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Halo-Halo</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/lomi.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Lomi</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/chkn-sotanghon.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Chicken Sotanghon</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/chkn-sotanghon.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Chicken Sotanghon</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/chkn-bihon.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Chicken Bihon</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/fried-chicken.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Fried Chicken</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/pancit.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Pancit</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
        <div class="card item" tabindex="0">
            <div class="holder item-img">
                <object data="../img/rice.svg" type="text/svg+xml" tabindex="-1"></object>
            </div>
            <div class="holder item-info">
                <span class="item-label">Rice</span>
                <button class="order-btn">
                    Order Now
                </button>
            </div>
        </div>
    </div>`
  );
  return frame;
}

export function createLocationFrame() {
  const frame = document.createElement("div");
  frame.classList.add("frame");

  insertHTML(
    frame,
    `
  <div class="holder label">
        <span class="subtitle">Come and Visit</span>
    </div>
    <div class="holder locations">
        <div class="holder location">
            <iframe class="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158.94787569291617!2d122.57278600666383!3d10.693289425769347!2m3!1f283.15375382774357!2f45!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x33aee564d53a47a9%3A0x2f8d5978f5d3d545!2sRoberto&#39;s!5e1!3m2!1sen!2sph!4v1665558637485!5m2!1sen!2sph"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="details">
                <span class="city">Iloilo City</span>
                <span class="info">61 JM Basa St, Iloilo City Proper</span>
                <span class="info">Accepts Dine-in and Take out</span>
                <span class="info">Open from Monday to Saturday</span>
                <span class="info">8:00 am to 5:30 pm</span>
                <span class="info">(033) 335 0484</span>
            </div>
        </div>
    </div>
    <div class="holder order-online">
        <span class="not-visit">Not interested in visiting us?</span>
        <button class="order-btn">
            <span>Order Online!</span>
        </button>
        <span class="care">And we will deliver with care</span>
    </div>
  `
  );

  return frame;
}

let swiperEl = new Swiper(".swiper", {
  loop: true,
  speed: 400,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4.8,
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 4,
    },

    960: {
      spaceBetween: 18,
    },

    768: {
      slidesPerView: 3,
    },

    500: {
      slidesPerView: 2.5,
    },
    350: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1.8,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on("resize", function () {
  swiper.update();
  swiper.slideTo(swiper.activeIndex, 0, false);
});
swiper.on("slideChange", function () {
  swiper.update();
});

const sliderItems = document.querySelectorAll(".slider__item");
const swiperItems = document.querySelectorAll(".swiper-list__item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let countItem = sliderItems.length;
let itemActive = 0;

next.addEventListener("click", () => {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
});

prev.addEventListener("click", () => {
  if (itemActive <= 0) {
    itemActive = countItem;
  }
  itemActive = itemActive - 1;

  showSlider();
});

function showSlider() {
  let itemActiveSlides = document.querySelector(".slider__item.active");
  let swiperActiveItem = document.querySelector(".swiper-list__item.active");
  itemActiveSlides.classList.remove("active");

  swiperActiveItem.classList.remove("active");
  sliderItems[itemActive].classList.add("active");
  swiperItems[itemActive].classList.add("active");
}

swiperItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});

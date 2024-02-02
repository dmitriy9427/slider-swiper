let swiperEl = new Swiper(".swiper", {
  loop: true,
  speed: 400,
  grabCursor: true,

  breakpoints: {
    1280: {
      slidesPerView: 4.5,
    },
    1260: {
      slidesPerView: 4,
    },
    1160: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 3,
    },
    868: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    668: {
      slidesPerView: 1,
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
  console.log(itemActive);

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

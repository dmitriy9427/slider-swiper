let swiperEl = new Swiper(".swiper", {
  loop: true,
  speed: 400,
  grabCursor: true,
  breakpoints: {
    1280: {
      slidesPerView: 4.5,
    },

    960: {},

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

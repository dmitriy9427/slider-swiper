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
  if (itemActive < 0) {
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
    console.log(item);
    itemActive = index;
    showSlider();
  });
});

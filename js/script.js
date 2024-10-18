// Use swiper.js

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next-btn',
    prevEl: '.swiper-prev-btn',
  }
});

// Handle links menu open and close

let $ = document;
const openMenuButton = $.getElementById("open-menu-button")
const closeMenuButton = $.getElementById("close-menu-button")
const menuElem = $.querySelector(".nav__links")

openMenuButton.addEventListener("click", () => {
  menuElem.style.right = "0"
})

closeMenuButton.addEventListener("click", () => {
  menuElem.style.right = "-300px"
})
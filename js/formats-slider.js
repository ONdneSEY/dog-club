const swiper = new Swiper(".swiper-container", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1240: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".reviews__button.right",
    prevEl: ".reviews__button.left",
  },
});

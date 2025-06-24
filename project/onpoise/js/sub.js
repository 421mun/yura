
// about_list
const about_list = new Swiper('.about_list', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },

    1480: {
      slidesPerView: 2,
      spaceBetween: 90,
    },

  },
});

//new
const new_list = new Swiper('.new_list', {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next", //다음
    prevEl: ".swiper-button-prev", //이전
  },
});


//food
const food_list = new Swiper('.food_list', {
  loop: true,
  speed: 1000,
  centeredSlides: true,


  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1490: {
      slidesPerView: 3,
      spaceBetween: 45,
    },

  },
});
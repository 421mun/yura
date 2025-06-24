//2차메뉴
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle()
});

//ham
$(".ham").click(function () {
  $(".mgnb_wrap").fadeIn();
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").fadeOut();
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});

//menu
const menu_list = new Swiper('.menu_list', {
  loop: true,
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    0: { //0픽셀 이상에서 min-width
      slidesPerView: 1.5,
      spaceBetween: 60,
      centeredSlides: true,
    },

    768: { //0픽셀 이상에서 min-width
      slidesPerView: 2,
      spaceBetween: 60,
      centeredSlides: true,
    },

    1024: { //0픽셀 이상에서 min-width
      slidesPerView: 3.5,
      spaceBetween: 60,
      centeredSlides: true,
    },

    1305: { //1200픽셀 이상에서
      slidesPerView: 3.5,
      spaceBetween: 60,
    },

  },
});

//project
const project_list = new Swiper('.project_list', {
  speed: 1000,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



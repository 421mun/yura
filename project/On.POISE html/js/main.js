
//program
const program_list = new Swiper('.program_list', {
  loop: true,
  speed: 1000,

  breakpoints: {
    0: { //0픽셀 이상에서 min-width
      slidesPerView: 1,
    },

    768: { //0픽셀 이상에서 min-width
      slidesPerView: 1.5,
      spaceBetween: 30,
    },

    920: { //0픽셀 이상에서 min-width
      slidesPerView: 2.5,
      spaceBetween: 40,
    },

    1480: { //1200픽셀 이상에서
      slidesPerView: 2.5,
      spaceBetween: 60,
    },

  },
});

//shop
const shop_list = new Swiper('.shop_list', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
});

//reivew
const reivew_list = new Swiper('.reivew_list', {
  centeredSlides: true,
  loop: true,
  speed: 1000,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 25,

    },
    1045: {
      slidesPerView: 2.5,
      spaceBetween: 35,
    },
    1470: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});


//qna
$(".qna_button button").click(function () {
  clearInterval(qna);
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let number = $(this).index();
  $(".qna_txt > li").eq(number).fadeIn().siblings().hide();
});

let idx = 0;
const qna = setInterval(function () {
  if (idx < 3) {
    idx++;
  } else {
    idx = 0;
  }
  $(".qna_button button").eq(idx).addClass("active").siblings().removeClass("active");
  $(".qna_txt > li").eq(idx).fadeIn().siblings().hide();
}, 5000);

//qna_btn
$(".qna_btn button").click(function () {
  $(this).toggleClass("active")
});

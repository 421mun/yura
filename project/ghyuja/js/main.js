const lenis = new Lenis({
  autoRaf: true,
});


$(window).scroll(function () {
  let pos = $(this).scrollTop();
  if (pos > 950) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
});



//pro
$(".pro_btn button").click(function () {
  clearInterval(pro);
  $(this).addClass("active");
  $(this).siblings().removeClass("active");

  let number = $(this).index();
  $(".pro_content > li").eq(number).fadeIn().siblings().hide();
})

let idx = 0;
const pro = setInterval(function () {
  if (idx < 4) {
    idx++;
  } else {
    idx = 0;
  }
  $(".pro_btn button").eq(idx).addClass("active").siblings().removeClass("active");
  $(".pro_content > li").eq(idx).fadeIn().siblings().hide();
}, 5000);

//event
const event_list = new Swiper('.event_list', {
  speed: 1000,
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    923: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1380: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
//gnb
$(".gnb>li").hover(function () {
  $(this).find(".depth2").stop().fadeToggle();
});

//mgnb
$(".ham").click(function () {
  $(this).toggleClass("active");
  $(".mgnb_wrap").fadeToggle();
  let txt = $(".ham").text();
  if (txt == "메뉴보기") {
    //조건이 만족 했을때 실행문 true
    $(".ham").text("메뉴닫기");
  } else {
    $(".ham").text("메뉴보기");
    //조건이 만족하지 않았을때
  }
});

$(".mgnb > li").hover(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});
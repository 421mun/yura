$(function () {

  $('#fullpage').fullpage({
    navigation: true,
    anchors: ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6', 'menu7'],
    navigationTooltips: ['Intro', 'About', 'Graphic', 'Web', 'Team', 'Shop', 'Epilogue'],
    autoScrolling: true,
    scrollHorizontally: true,
    navigationPosition: 'left',
    showActiveTooltip: true,
    autoScrolling: true,
    responsiveWidth: 1200,
  });

  // 모바일메뉴
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
      "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
      right: "-100%"
    });
    $(".dim").fadeOut();
  });

  $(".mgnb > li > a").click(function () {
    $(".mgnb_wrap").animate({
      right: "-100%"
    });
    $(".dim").fadeOut();
  });

});


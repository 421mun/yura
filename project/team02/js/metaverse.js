AOS.init({
  duration: 2000, // 애니메이션 지속 시간 (2초)
  once: true, // 애니메이션이 한 번만 실행되게 설정
  offset: 400, // 애니메이션이 실행되기 전에 화면에서 얼마나 내려갔을 때 실행될지 설정
});
gsap.to(".metaverse_txt h3", {
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 1,
  ease: "power1.inOut"
});




/* slide */

const zepSwiper = new Swiper('.zepSwiper', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    speed: 1000,
    disableOnInteraction: false,
  },


  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  },
});


/* popup */

const openBtn = document.getElementById("openPopup");
const closeBtn = document.getElementById("closePopup");
const popupOverlay = document.getElementById("popupOverlay");

// 열기
openBtn.addEventListener("click", () => {
  popupOverlay.classList.add("active");
});

// 닫기
closeBtn.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});


/* 마우스에 따라서 움직이는 버튼_예매하러가기 */
const syncPointer = ({ x: pointerX, y: pointerY }) => {
  const x = pointerX.toFixed(2);
  const y = pointerY.toFixed(2);
  const xp = (pointerX / window.innerWidth).toFixed(2);
  const yp = (pointerY / window.innerHeight).toFixed(2);
  document.documentElement.style.setProperty('--x', x);
  document.documentElement.style.setProperty('--xp', xp);
  document.documentElement.style.setProperty('--y', y);
  document.documentElement.style.setProperty('--yp', yp);
};
document.body.addEventListener('pointermove', syncPointer);
//# sourceURL=pen.js
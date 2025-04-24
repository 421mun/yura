AOS.init({
  duration: 1000, // 애니메이션 지속 시간 (2초)
  once: true, // 애니메이션이 한 번만 실행되게 설정
  offset: 400, // 애니메이션이 실행되기 전에 화면에서 얼마나 내려갔을 때 실행될지 설정
});

/* 비주얼 반짝이는 배경 */
const limit = 100;
const target = document.querySelector('.visual .stars');

for (let i = 0; i < limit; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * 100 + '%';
  star.style.left = Math.random() * 100 + '%';
  star.style.animationDelay = Math.random() * 5 + 's';
  target.appendChild(star);
}

/* 비주얼 이미지 오브젝트 움직임 */
gsap.to('.amongus', {
  yPercent: -15,
  yoyo: true,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
})

gsap.to('.helmet', {
  rotation: -5, // 또는 rotationZ
  yoyo: true,
  duration: 2,
  ease: "power1.inOut",
  repeat: -1,
});

function animateMaple() {
  const vw = window.innerWidth;
  const maple = document.querySelector('.maple');

  console.log("현재 창 너비:", vw);
  if (!maple) {
    console.log("⚠️ .maple 요소가 존재하지 않음");
    return;
  }

  if (vw >= 1900 && vw <= 1930) {
    gsap.to('.maple', {
      xPercent: 560,
      yPercent: -60,
      yoyo: true,
      duration: 3.5,
      ease: "power1.inOut",
      repeat: -1,
    });
  } else {
    gsap.killTweensOf('.maple');
    gsap.set('.maple', {
      clearProps: "xPercent,yPercent,transform"
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  animateMaple();
  window.addEventListener('resize', animateMaple);
});

/* 날짜 카운트다운 */
function startCountdown(targetDateString) {
  const targetDate = new Date(targetDateString + "T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      document.getElementById("countDownDay").innerText = "0";
      document.getElementById("countDownHour").innerText = "00";
      document.getElementById("countDownMin").innerText = "00";
      document.getElementById("countDownSec").innerText = "00";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("countDownDay").innerText = days;
    document.getElementById("countDownHour").innerText = hours.toString().padStart(2, '0');
    document.getElementById("countDownMin").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("countDownSec").innerText = seconds.toString().padStart(2, '0');
  }

  updateCountdown(); // 초기 실행
  const timer = setInterval(updateCountdown, 1000);
}

// 실행!
startCountdown("2025-11-15");

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
const nexon = new Swiper(".nexon", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

const riot = new Swiper(".riot", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

const blizzard = new Swiper(".blizzard", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

const soop = new Swiper(".soop", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

const steam = new Swiper(".steam", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1150: {
      slidesPerView: 2,
      spaceBetween: 70,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
  },
});

// Swiper 끝난 후 AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 200,
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
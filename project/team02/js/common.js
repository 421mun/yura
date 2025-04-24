
/* 스크롤 */
function toggleScrolled() {
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');
  if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
  window.scrollY > 700 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);

/* gnb 호버 효과 */
class NavigationEffect {
  constructor(navigation) {
    this.previous = null;
    this.current = null;
    this.navigation = navigation;
    this.anchors = this.navigation.querySelectorAll("a");

    this.anchors.forEach((anchor) => {
      anchor.addEventListener("mouseenter", () => {
        this.handleCurrent(anchor);
      });

      anchor.addEventListener("mouseleave", () => {
        this.handlePrevious(anchor);
      });
    });
  }

  handleCurrent(current) {
    this.current = current;
    const nodes = this.getNodes(this.current);

    gsap.to(nodes[0], {
      duration: 0.9,
      ease: RoughEase.ease.config({ strength: 5, points: 50 }),
      attr: { x: "0%" },
      overwrite: true,
      stagger: 0.012
    });

    gsap.to(nodes[1], {
      duration: 0.9,
      ease: RoughEase.ease.config({ strength: 5, points: 50 }),
      attr: { x: "0%" },
      stagger: 0.012,
      overwrite: true,
      delay: 0.1
    });

    gsap.fromTo(
      [nodes[1], nodes[0]],
      { opacity: 1 },
      {
        opacity: 0.75,
        duration: 0.13,
        ease: RoughEase.ease.config({ strength: 5, points: 50 }),
        repeat: -1,
        delay: 1.1
      }
    );
  }

  handlePrevious(anchor) {
    const nodes = this.getNodes(anchor);
    gsap.to(nodes[0], {
      duration: 0.2,
      ease: "power1.out",
      attr: { x: "-101%" },
      overwrite: true
    });

    gsap.to(nodes[1], {
      duration: 0.2,
      ease: "power1.out",
      attr: { x: "-101%" },
      overwrite: true,
      delay: 0.02
    });
  }

  getNodes(item) {
    return [
      gsap.utils.shuffle(gsap.utils.selector(item)(".blue rect")),
      gsap.utils.shuffle(gsap.utils.selector(item)(".pink rect"))
    ];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(EasePack);
  new NavigationEffect(document.querySelector("nav"));
});

/* mgnb */
$(".ham").click(function () {
  $(this).toggleClass("active");
  $("#header").toggleClass("active");
  $(".mgnb_wrap").fadeToggle();

  let txt = $(".ham").text();
  if (txt == "메뉴보기") {
    $(".ham").text("메뉴닫기");
    $("body").css("overflow", "hidden"); // 스크롤 막기
  } else {
    $(".ham").text("메뉴보기");
    $("body").css("overflow", "auto"); // 스크롤 다시 활성화
  }
});


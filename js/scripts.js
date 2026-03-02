function burgerMenu() {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  if (!burger || !menu) return;

  burger.addEventListener("click", () => {
    burger.classList.toggle("active-burger");
    menu.classList.toggle("active-menu");
    body.classList.toggle("lock");
  });

  menu.addEventListener("click", (e) => {
    const link = e.target.closest(".header__menu-link");
    if (!link) return;

    burger.classList.remove("active-burger");
    menu.classList.remove("active-menu");
    body.classList.remove("lock");
  });
}

document.addEventListener("DOMContentLoaded", burgerMenu);

function accordion() {
  const items = document.querySelectorAll(".questions__item");

  items.forEach((item) => {
    const button = item.querySelector(".questions__button");
    const itemTitle = item.querySelector(".questions__title");
    const content = item.querySelector(".questions__content");

    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("questions__item--open");

      items.forEach((el) => {
        el.classList.remove("questions__item--open");
        el.querySelector(".questions__button").classList.remove(
          "questions__button--open",
        );
        el.querySelector(".questions__title").classList.remove(
          "questions__title--open",
        );
        el.querySelector(".questions__content").classList.remove(
          "questions__content--open",
        );
      });

      if (!isOpen) {
        item.classList.add("questions__item--open");
        button.classList.add("questions__button--open");
        itemTitle.classList.add("questions__title--open");
        content.classList.add("questions__content--open");
      }
    });
  });
}

accordion();
;
const reviewsSwiper = new Swiper(".reviews__swiper", {
  loop: true,
  speed: 500,

  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    prevEl: ".reviews__prev",
    nextEl: ".reviews__next",
  },

  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
const newSwiper = new Swiper(".awards__swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".awards__prev",
    nextEl: ".awards__next",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const buttons = document.querySelectorAll(".gallery__block-bottom-button");
const boxes = document.querySelectorAll(".gallery__block-bottom-box");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.gallery;

    buttons.forEach((b) =>
      b.classList.toggle("gallery__block-bottom-button-active", b === btn),
    );

    boxes.forEach((box) => {
      box.classList.toggle(
        "hide",
        category !== "all" && box.dataset.gallery !== category,
      );
    });
  });
});

const classroomSwiper = new Swiper(".swiper-classroom", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 500,
  navigation: {
    prevEl: ".swiper-classroom-prev",
    nextEl: ".swiper-classroom-next",
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const librarySwiper = new Swiper(".swiper-library", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-library-prev",
    nextEl: ".swiper-library-next",
  },
});
const scienceSwiper = new Swiper(".swiper-science", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-science-prev",
    nextEl: ".swiper-science-next",
  },
});
const computerSwiper = new Swiper(".swiper-computer", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-computer-prev",
    nextEl: ".swiper-computer-next",
  },
});
const areaSwiper = new Swiper(".swiper-area", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-area-prev",
    nextEl: ".swiper-area-next",
  },
});



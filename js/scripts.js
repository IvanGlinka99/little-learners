function accordion() {
  const items = document.querySelectorAll(".questions__item");

  items.forEach((item) => {
    const button = item.querySelector(".questions__item-button");
    const itemTitle = item.querySelector(".questions__item-title");
    const content = item.querySelector(".questions__item-content");

    item.addEventListener("click", () => {
      const isOpen = item.classList.contains("questions__item--open");

      items.forEach((el) => {
        el.classList.remove("questions__item--open");
        el.querySelector(".questions__item-button").classList.remove(
          "questions__item-button--open",
        );
        el.querySelector(".questions__item-title").classList.remove(
          "questions__item-title--open",
        );
        el.querySelector(".questions__item-content").classList.remove(
          "questions__item-content--open",
        );
      });

      if (!isOpen) {
        item.classList.add("questions__item--open");
        button.classList.add("questions__item-button--open");
        itemTitle.classList.add("questions__item-title--open");
        content.classList.add("questions__item-content--open");
      }
    });
  });
}

accordion();
;
const swiper = new Swiper(".reviews__swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  speed: 500,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

const newSwiper = new Swiper(".awards__swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".awards__prev",
    nextEl: ".awards__next",
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
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-classroom-prev",
    nextEl: ".swiper-classroom-next",
  },
});
const librarySwiper = new Swiper(".swiper-library", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-library-prev",
    nextEl: ".swiper-library-next",
  },
});
const scienceSwiper = new Swiper(".swiper-science", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-science-prev",
    nextEl: ".swiper-science-next",
  },
});
const computerSwiper = new Swiper(".swiper-computer", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-computer-prev",
    nextEl: ".swiper-computer-next",
  },
});
const areaSwiper = new Swiper(".swiper-area", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 500,
  navigation: {
    prevEl: ".swiper-area-prev",
    nextEl: ".swiper-area-next",
  },
});



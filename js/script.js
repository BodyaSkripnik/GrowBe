const testimonialsSlider = new Swiper(".testimonials__slider", {
  // slidesPerView: 2.6, // сколько слайдов нужно показать
  spaceBetween: 30, // расстояние между ними
  centeredSlides: true, // если нужно поставить по центру
  loop: true, // бесконечная прокрутка
  autoplay: {
    // автопролистование
    delay: 5000, // автопролистование 5 сек
    pauseOnMouseEnter: true, //останавливать при наведении
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets:true,
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';
    //   }
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.6,
    },
    720: {
      slidesPerView: 1.9,
    },
    1080: {
      slidesPerView: 2.4,
    },
    1440: {
      slidesPerView: 3,
    },
    1740: {
      slidesPerView: 3.5,
    },
    2000: {
      slidesPerView: 4,
    },
    2400: {
      slidesPerView: 4,
    },
  },
});

const blogSlides = document.querySelectorAll(".blog__slider .swiper-slide");

if (blogSlides.length <= 3) {
  for (let slide of blogSlides) {
    slide.classList.add("active");
  }
}

if (blogSlides.length > 3) {
  const blogSlider = new Swiper(".blog__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320:{
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1.4,
      },
      700: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 1.2,
      },
      1100: {
        slidesPerView: 1.3,
      },
      1200: {
        slidesPerView: 1.5,
      },
      1400: {
        slidesPerView: 1.9,
      },
      1700: {
        slidesPerView: 2.3,
      },
      1900: {
        slidesPerView: 2.5,
      },
      2100: {
        slidesPerView: 2.8,
      },
      2400: {
        slidesPerView: 3.2,
      },
    },
  });
}

// Burger

const burger = document.querySelector(".burger");
const burgerRight = document.querySelector(".burger__right")
const menu = document.querySelector(".menu");
const body = document.body;

burger.addEventListener("click", () => {
  // burger.classList.toggle("active");
  // menu.classList.toggle("active");
  // body.classList.toggle("no-scroll")
  if(!burger.classList.contains("active")){
    burger.classList.add("active");
    burgerRight.classList.add("active");
    menu.classList.add("active");
    body.classList.add("no-scroll")
  }else{
    burger.classList.remove("active");
    burgerRight.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("no-scroll")
  }
});


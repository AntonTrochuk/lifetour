
import { wrapperMenu } from './wrapper-menu';
import { formValid } from './form-valid';

wrapperMenu ();
formValid();

function updateSlideFocus(slider) {
  slider.slides.forEach((slide, index) => {
    const isActive = index === slider.activeIndex;
    const focusableElements = slide.querySelectorAll('a, button, input, textarea, select, [tabindex]');

    focusableElements.forEach((el) => {
      if (isActive) {
        el.removeAttribute('tabindex');
        el.setAttribute('aria-hidden', 'false');
      } else {
        el.setAttribute('tabindex', '-1');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  });
}

import Swiper from 'swiper';
import { Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSwiper = document.querySelector('.swiper');
const heroSlider = new Swiper(heroSwiper, {
  modules: [Pagination],
  loop: true,
  speed: 500,
  effect: 'fade',
  simulateTouch: true,
  touchRatio: 1,
  allowTouchMove: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
    bulletClass: 'hero__toggle',
    bulletActiveClass: 'hero__toggle--active',
    dynamicBullets: false,
    renderBullet: function (index, className) {
      return `<button class="${className}" role="tab" aria-label="Перейти к слайду ${index + 1}"></button>`;
    }
  },

  breakpoints: {
    1440: {
      slidesPerView: 1,
      spaceBetween: 40,
      simulateTouch: false,
      touchRatio: 0,
      allowTouchMove: false
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
      simulateTouch: true,
      touchRatio: 1,
      allowTouchMove: true
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
      simulateTouch: true,
      touchRatio: 1,
      allowTouchMove: true
    },
  },

  on: {
    init: function () {
      updateSlideFocus(this);
    },
    slideChange: function () {
      updateSlideFocus(this);
    }
  }
});


heroSlider.update();

const toursSwiper = document.querySelector('.tours-swiper');
const toursSlider = new Swiper(toursSwiper, {
  modules: [Navigation],
  loop: false,
  speed: 500,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev',
    disabledClass: 'disabled',
  },

  on: {
    init: function() {
      this.navigation.update();
    },
    slideChange: function() {
      this.navigation.update();
    },
    reachBeginning: function() {
      this.navigation.prevEl.classList.add('disabled');
    },
    reachEnd: function() {
      this.navigation.nextEl.classList.add('disabled');
    },
    fromEdge: function() {
      this.navigation.prevEl.classList.remove('disabled');
      this.navigation.nextEl.classList.remove('disabled');
    },
    slidesLengthChange: function() {
      this.navigation.update();
    }
  }
});

toursSlider.navigation.update();

const trainingSwiper = document.querySelector('.training-swiper');
const trainingSlider = new Swiper(trainingSwiper, {

  modules: [Navigation],
  loop: false,
  speed: 500,

  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.training__header-button--next',
    prevEl: '.training__header-button--prev',
    lockClass: 'disabled',
  },

  on: {
    init: function() {
      this.navigation.update();
    },
    slideChange: function() {
      this.navigation.update();
    },
    reachBeginning: function() {
      this.navigation.prevEl.classList.add('disabled');
    },
    reachEnd: function() {
      this.navigation.nextEl.classList.add('disabled');
    },
    fromEdge: function() {
      this.navigation.prevEl.classList.remove('disabled');
      this.navigation.nextEl.classList.remove('disabled');
    },
    slidesLengthChange: function() {
      this.navigation.update();
    }
  }
});

trainingSlider.navigation.update();

const reviewsSwiper = document.querySelector('.reviews-swiper');
const reviewsSlider = new Swiper(reviewsSwiper, {

  modules: [Navigation],
  loop: false,
  speed: 500,

  slidesPerView: 'auto',
  centeredSlides: false,

  breakpoints: {
    1200: {
      slidesPerView: 1.61,
      spaceBetween: 120,
    },

    768: {
      slidesPerView: 1.19,
      spaceBetween: 30,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.reviews__header-button--next',
    prevEl: '.reviews__header-button--prev',
    lockClass: 'disabled',
  },

  on: {
    init: function() {
      this.navigation.update();
    },
    slideChange: function() {
      this.navigation.update();
    },
    reachBeginning: function() {
      this.navigation.prevEl.classList.add('disabled');
    },
    reachEnd: function() {
      this.navigation.nextEl.classList.add('disabled');
    },
    fromEdge: function() {
      this.navigation.prevEl.classList.remove('disabled');
      this.navigation.nextEl.classList.remove('disabled');
    },
    slidesLengthChange: function() {
      this.navigation.update();
    }
  }
});

reviewsSlider.navigation.update();

let advSlider = null;

function initAdvSwiper() {
  const advSwiper = document.querySelector('.adv-swiper');

  if (advSlider) {
    advSlider.destroy(true, true);
    advSlider = null;
  }

  if (window.innerWidth > 1200) {
    advSlider = new Swiper(advSwiper, {
      modules: [Navigation],
      loop: true,
      speed: 500,

      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 2,
          centeredSlides: false,
        },
      },

      navigation: {
        nextEl: '.adv__button--next',
        prevEl: '.adv__button--prev',
      },
    });

    advSlider.navigation.update();
  } else {
    advSwiper.style.overflow = 'visible';
    const slides = advSwiper.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      slide.style.width = 'auto';
      slide.style.transform = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', initAdvSwiper);

window.addEventListener('resize', initAdvSwiper);


let gallerySlider = null;

function initGallerySwiper() {
  const gallerySwiper = document.querySelector('.gallery-swiper');

  if (gallerySlider) {
    gallerySlider.destroy(true, true);
    gallerySlider = null;
  }

  if (window.innerWidth < 1200) {
    gallerySlider = new Swiper(gallerySwiper, {
      modules: [Navigation],
      loop: true,
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 5,
      slidesPerGroup: 1,
      centeredSlides: false,

      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        }
      },

      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
    });

    gallerySlider.navigation.update();
  } else {
    gallerySwiper.style.overflow = 'visible';
    const slides = gallerySwiper.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      slide.style.width = 'auto';
      slide.style.transform = 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', initGallerySwiper);
window.addEventListener('resize', initGallerySwiper);

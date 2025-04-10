const buttonOpen = document.querySelector('.button-open');
const buttonClose = document.querySelector('.button-close');
const wrapper = document.querySelector('.header__wrapper');
const wrapperItems = document.querySelectorAll('.header__wrapper-item');

const wrapperMenu = () => {
  const openMenu = () => {
    wrapper.classList.add('wrapper--open');
    buttonClose.classList.add('wrapper-button--close');
    buttonOpen.classList.remove('wrapper-button--open');
  };

  const closeMenu = () => {
    wrapper.classList.remove('wrapper--open');
    buttonClose.classList.remove('wrapper-button--close');
    buttonOpen.classList.add('wrapper-button--open');
  };

  buttonOpen.addEventListener('click', openMenu);
  buttonClose.addEventListener('click', closeMenu);

  wrapperItems.forEach((item) => {
    item.addEventListener('click', closeMenu);
  });
};

export { wrapperMenu };

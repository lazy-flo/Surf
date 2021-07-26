const modalMenu = document.querySelector('#modalMenu');
console.log(modalMenu);
const header = document.querySelector('.header')
console.log(header);
const menu = document.querySelector('.menu--vertical');
const modalBtn = document.querySelector('#hamburger-menu');
console.log(modalBtn);
const close = document.querySelector('.fullscreen-menu__close');

modalBtn.addEventListener('click', (e) => {
  e.preventDefault()
modalMenu.style.display = "block"
header.style.position = "relative"
menu.style.display = "block"
});

close.addEventListener ('click', (e) => {
  modalMenu.style.display = "none"
  header.style.position = "absolute"
  menu.style.display = "none"
});
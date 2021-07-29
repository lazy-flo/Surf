const modalMenu = document.querySelector('#modalMenu');
console.log(modalMenu);
const header = document.querySelector('.header')
console.log(header);
const menu = document.querySelector('.menu--vertical');
const modalBtn = document.querySelector('#hamburger-menu');
console.log(modalBtn);
const close = document.querySelector('.fullscreen-menu__close');

const menuList = modalMenu.querySelector('.menu__list');

function openMenu() {
  modalMenu.style.display = "block";
  header.style.position = "relative";
  menu.style.display = "block";
}

function closeMenu(){
  modalMenu.style.display = "none";
  header.style.position = "absolute";
  menu.style.display = "none";
}

menuList.addEventListener('click', (e) => {
  e.preventDefault();
  if(e.target.classList.contains('menu__link')){
    closeMenu();
  };
})

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

close.addEventListener ('click', (e) => {
  e.preventDefault();
 closeMenu()
});
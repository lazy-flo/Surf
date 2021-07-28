let accord = () => {
  
let team = document.querySelector(".team__list");


team.addEventListener('click', function (evt) {
  evt.preventDefault();
  const link = evt.target;
 

  if(link.classList.contains('staff__link')) {
    const activeItem = team.querySelector('.staff__content.is-active');
    console.log(activeItem);

    if(activeItem) {
      let activeText = activeItem.querySelector('.staff__hidden');
      activeText.style.height = "0px";
      activeItem.classList.remove('is-active');
      }

      if (!activeItem || activeItem.querySelector('.staff__link') !== link) {
        let currentElementList = link.closest('.staff__content');
        currentElementList.classList.add('is-active');
        let currentText = currentElementList.querySelector(".staff__hidden");
        currentText.style.height = currentText.scrollHeight + "px"
      }
  }
});
};

accord();

const verticalAcco = () => {
  const links = document.querySelectorAll('.menu-acco__link');
  const body = document.querySelector('body');
  const calculateWidth = () => {

    const windowWidth = window.innerWidth;
    const MAX_WIDTH_OPEN_MENU = 530;

    const linksWidth = links[0].offsetWidth;

    const reqWidth = windowWidth - (linksWidth * links.length);

    return reqWidth > MAX_WIDTH_OPEN_MENU ? MAX_WIDTH_OPEN_MENU : reqWidth;
  };

  function closeItem(activeElement) {
    const activeText = activeElement.querySelector(".menu-acco__content");
    activeText.style.width = "0px";
    activeElement.classList.remove("active");

  }

  links.forEach(function (elem) {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      const link = e.target.closest('.menu-acco__link');
      console.log(link);
      const active = document.querySelector('.menu-acco__item.active');

      if (active) {
        closeItem(active);
      }
      if (!active || active.querySelector('.menu-acco__link') !== link) {
        const current = link.closest('.menu-acco__item');
        current.classList.add('active');
        const currentText = current.querySelector('.menu-acco__content');
        if (body.offsetWidth > 480) {
          currentText.style.width = calculateWidth() + "px";
        } else {
          currentText.style.width = '100%';
        }

      }

    });

  });

  document.addEventListener('click', e => {
    let activePerson = document.querySelector('.menu-acco__item.active');
    const target = e.target;

    if (!target.closest(".menu-acco") && activePerson) {
      closeItem(activePerson);
    }

    if (target.closest('.menu-acco__btn') && activePerson) {
      e.preventDefault();
      closeItem(activePerson);
    }

  });


};


verticalAcco();
const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find(".fixed-menu__item");

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {
  return sectionEq * -100
};

const ChangeMenuThemeForSection = sectionEq => {
  const currentSection = sections.eq(sectionEq);
  const menuTheme = currentSection.attr("data-sidemenu-theme");
  const activeClass = "fixed-menu--col--dark"


  if(menuTheme == "black") {
    sideMenu.addClass(activeClass)
  } else {
    sideMenu.removeClass(activeClass)
  }

};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
  items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = (sectionEq) => {
  if(inScroll) return;
  const transitionOver = 1000;
  const mouseInertiaOver = 300;

    inScroll = true;
    const position = countSectionPosition(sectionEq);

    ChangeMenuThemeForSection(sectionEq);


    display.css({
      transform: `translateY(${position}%)`,
  
    });


    resetActiveClassForItem(sections, sectionEq, "active");
  

   setTimeout(() => {
     inScroll = false;

     resetActiveClassForItem(menuItems, sectionEq, "fixed-menu__item--active")
     
   }, transitionOver + mouseInertiaOver);
  
};


const scrollViewport = direction => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();



  if(direction == "next" && nextSection.length) {
    performTransition(nextSection.index())

  }

  if(direction == "prev" && prevSection.length) {
    performTransition(prevSection.index())

  }
}

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if(deltaY > 0) {
    scrollViewport("next")

  }

  if(deltaY < 0) {
    scrollViewport("prev")

  }
});

$(window).on("keydown", e => {

  // const tagName = e.target.toLowerCase();
  switch (e.keyCode) {
    case 38: //prev
      scrollViewport("prev");
      break;

      case 40: //next
      scrollViewport("next");
      break;
  }
  // if(tagName != "input" && tagName != "textarea") {
  //   switch (e.keyCode) {
  //     case 38: //prev
  //       scrollViewport("prev");
  //       break;
  
  //       case 40: //next
  //       scrollViewport("next");
  //       break;
        
  //   }
  

})

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`);
  

  performTransition(reqSection.index());
});


if (isMobile) {
//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
$("body").swipe( {
  
  swipe:function(
    event, 
    direction, 
  ) {
    // alert(direction);
    const scroller = viewportScroller();
    let scrollDirection = "";

    if (direction == "up") {scrollDirection = "next"};
    if (direction == "down") {scrollDirection = "prev"};
    
    scroller[scrollDirection]();
  },
});


}




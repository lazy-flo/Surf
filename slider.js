 $(document).ready(function () {
 const slider = $('.bxslider').bxSlider({
    controls: false
  })

  const leftControlBtn = $('.market__arrow--pos--left');
  const rightControlBtn = $('.market__arrow--pos--right')

  leftControlBtn.click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
  })

  rightControlBtn.click(e => {
    e.preventDefault();
    slider.goToNextSlide();
  })
  
});

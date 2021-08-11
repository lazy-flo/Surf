findBlock = (block) => {
  return $('.reviews__card-inner').filter((ndx,item) => {
    return $(item).attr('data-pair') == block;


  });
};

$('.interactive-avatar__link').click(e => {
  e.preventDefault();

  const link = $(e.currentTarget);
  const target = link.attr('data-open');
  const itemToShow = findBlock(target)
  const currentItem = link.closest(".interactive-avatar");

  itemToShow.addClass('active').siblings().removeClass('active');
  currentItem.addClass('active').siblings().removeClass('active');


});


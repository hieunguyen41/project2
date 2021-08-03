let nut = document.getElementById(`n3v`);
const showHideMenu = ()=> {
	document.body.classList.toggle(`show-menu`);
}
nut.addEventListener(`click`, showHideMenu);
/*==================*/

const b0 = new Swiper('.banner0truot', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.banner0truot .swipper-button-next',
    prevEl: '.banner0truot .swiper-button-prev',
 
  },
});


let arTabs = Array.from(document.querySelectorAll(`.pro-info .he-tab > li`));
let boDiv = document.querySelectorAll(`.pro-info > div`);

const bamTab = (e) => {
	arTabs.forEach(a => a.classList.remove(`cur-tab`));
	e.target.classList.add(`cur-tab`);
	let n = arTabs.indexOf(e.target);
	boDiv.forEach(b=> b.style.display = `none`);
	boDiv[n].style.display = `block`;
}
arTabs.forEach(r => r.addEventListener(`click`, bamTab));


//================== GALLERY
var thumbSwiper = new Swiper(".gallery-thumbs", {
        spaceBetween: 15,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
         navigation: {
    		nextEl: '.swiper-button-next',
    		prevEl: '.swiper-button-prev',
 				 },
      });
      var topSwiper = new Swiper(".gallery-top", {
        loop: true,
        thumbs: {
          swiper: thumbSwiper,
        },
      });
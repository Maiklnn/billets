@@include('files/sliders.js')


const sliderProjects = document.querySelector('.advantages-list-slider');

let mySwiper = new Swiper(sliderProjects, {
	slidesPerView: 1,
	speed: 1000,
	slidersPerView: 1,
	effect: "fade",
	slideToClickedSlide: true,
	autoplay: {
		delay: 1000,
	},
	navigation: {
		nextEl: '.advantages-list-slider-button-next',
		prevEl: '.advantages-list-slider-button-prev',
	},
	pagination: {
		type: 'bullets',
		el: '.advantages-list-slider-pagination',
		clickable: true,
	},
})

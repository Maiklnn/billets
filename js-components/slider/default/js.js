var nameSlider = 'name-slider';

var mySwiper = new Swiper(document.querySelector(`.${nameSlider}`), {
	spaceBetween: 30,
	// растояние
	//	slidesPerView: 4,// кол-во слайдов
	slideToClickedSlide: true,
	// loop: true,
	// centeredSlides: true, // ативный слайд по центру
	autoplay: {
		delay: 1000
	},
	speed: 2000,
	navigation: {
		nextEl: `.${nameSlider}-navigation__next`,
		prevEl: `.${nameSlider}-navigation__prev`,
	},
	pagination: {
		type: 'bullets',
		// type: 'fraction',
		el: `.${nameSlider}-pagination`,
		clickable: true
	},
	breakpoints: {
		1200: {
			slidesPerView: 4
		},
		800: {
			slidesPerView: 3
		},
		450: {
			slidesPerView: 2
		},
		200: {
			slidesPerView: 1
		}
	}
});

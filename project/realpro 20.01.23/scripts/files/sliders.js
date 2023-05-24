@@include('libs/swiper-bundle.min.js')




// screen-5-slider

var sliderProjectsClass = 'screen-5-slider';

var mySwiper = new Swiper(document.querySelector(`.${sliderProjectsClass}`), {
	spaceBetween: 8,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000
	},
	speed: 500,
	navigation: {
		nextEl: `.${sliderProjectsClass}-button-next`,
		prevEl: `.${sliderProjectsClass}-button-prev`,
	},
	pagination: {
		type: 'bullets',
		// type: 'fraction',
		el: `.${sliderProjectsClass}-pagination`,
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
			slidesPerView: 1.1
		}
	}
});



// screen-11-slider

var sliderProjectsClass = 'screen-11-slider';

var mySwiper = new Swiper(document.querySelector(`.${sliderProjectsClass}`), {
	spaceBetween: 40,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000
	},
	speed: 500,
	navigation: {
		nextEl: `.${sliderProjectsClass}-button-next`,
		prevEl: `.${sliderProjectsClass}-button-prev`,
	},
	pagination: {
		type: 'bullets',
		// type: 'fraction',
		el: `.${sliderProjectsClass}-pagination`,
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
			slidesPerView: 1.3
		}
	}
});



// screen-12-slider

var sliderProjectsClass = 'screen-12-slider';

var mySwiper = new Swiper(document.querySelector(`.${sliderProjectsClass}`), {
	spaceBetween: 11,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000
	},
	speed: 500,
	navigation: {
		nextEl: `.${sliderProjectsClass}-button-next`,
		prevEl: `.${sliderProjectsClass}-button-prev`,
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
			slidesPerView: 1.2
		}
	}
});


// screen-14-slider

var sliderProjectsClass = 'screen-14-slider';

var mySwiper = new Swiper(document.querySelector(`.${sliderProjectsClass}`), {
	spaceBetween: 10,
	slideToClickedSlide: true,
	autoplay: {
		delay: 3000
	},
	speed: 500,
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
			slidesPerView: 1.2
		}
	}
});


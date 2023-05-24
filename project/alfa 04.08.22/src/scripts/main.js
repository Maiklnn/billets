@@include('files/sliders.js')


const sliderProjects = document.querySelector('.advantages-list-slider');
let mySwiper = new Swiper(sliderProjects, {
	slidesPerView: 1,
	speed: 1000,
	slidersPerView: 1,
	effect: "slide",
	slideToClickedSlide: true,
	autoplay: {
		delay: 1000,
	},
})

const sliderBook = document.querySelector('.book-slider');
let bookSwiper = new Swiper(sliderBook, {
	slidesPerView: 1,
	speed: 1000,
	slidersPerView: 1,
	effect: "slide",
	slideToClickedSlide: true,
	autoplay: {
		delay: 1000,
	},
})

const sliderPartition = document.querySelector('.partition-slider');
let partitionSwiper = new Swiper(sliderPartition, {
	slidesPerView: 1,
	speed: 1000,
	slidersPerView: 1,
	effect: "slide",
	slideToClickedSlide: true,
	autoplay: {
		delay: 1000,
	},
})




// Проэкты
const slidersKeys = document.querySelectorAll('.sliders-keys');

slidersKeys.forEach((item) => {
	new Swiper(item, {
		slidesPerView: 1,
		speed: 1000,
		slidersPerView: 1,
		effect: "slide",
		slideToClickedSlide: true,
		autoplay: {
			delay: 1000,
		},
	})

})

// http://wp-kitchens/wp-content/themes/web-nn/ajax-template/phpmailer/send.php




// нижний слайдер
const sliderBottom = document.querySelector('.bottom-slider');
let mySwiper1 = new Swiper(sliderBottom, {
	spaceBetween: 10,  // растояние
	autoplay: {
		delay: 2000, // Пауза между прокруткой
	},
	slideToClickedSlide: true,
	breakpoints: {
		1820: {
			slidesPerView: 5,
		},
		1500: {
			slidesPerView: 4,
		},
		1100: {
			slidesPerView: 3,
		},
		750: {
			slidesPerView: 2,
		},
		300: {
			slidesPerView: 1,
		},
	}
})

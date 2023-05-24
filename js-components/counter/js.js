document.addEventListener('DOMContentLoaded', () => {
	const timeCounter = document.querySelector('.time-count');
	const newData = new Date(timeCounter.dataset.date);


	const daysVal = timeCounter.querySelector('.time-count__days .time-count__val');
	const hoursVal = timeCounter.querySelector('.time-count__hours .time-count__val');
	const minutesVal = timeCounter.querySelector('.time-count__minutes .time-count__val');
	const secondsVal = timeCounter.querySelector('.time-count__seconds .time-count__val');

	const daysText = timeCounter.querySelector('.time-count__days .time-count__text');
	const hoursText = timeCounter.querySelector('.time-count__hours .time-count__text');
	const minutesText = timeCounter.querySelector('.time-count__minutes .time-count__text');
	const secondsText = timeCounter.querySelector('.time-count__seconds .time-count__text');

	// функция склонения
	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}

	// считаем нужное значение
	const timeCount = () => {
		let now = new Date();
		let leftUntil = newData - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		let seconds = Math.floor(leftUntil / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent =	hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
	};

	timeCount();
	setInterval(timeCount, 1000);
});

document.addEventListener('click', (e) => {
	if(e.target.closest('[data-burger]')) {
		let burger = e.target.closest('[data-burger]')
		burger.classList.toggle('open')
		let menu = 	document.querySelector(`.${burger.dataset.burger}`)
		console.log(menu);
		menu.classList.toggle('open');
	}
})



let hints = document.querySelectorAll('.hints')

hints.forEach(item => {
	item.addEventListener("mouseover", (event) => {
		let target = event.target;
		let offsetRight = document.documentElement.clientWidth - target.offsetLeft;
		let offsetTop = target.offsetTop - window.pageYOffset;
		if(offsetTop < 200) {
			target.offsetLeft < offsetRight ? target.classList.add("bottoml") : target.classList.add("bottomr");
		} else {
			target.offsetLeft < offsetRight ? target.classList.add("topl") : target.classList.add("topr");
		}
	})
})

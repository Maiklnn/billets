// fag
document.addEventListener('click', function (e) {
	const element = e.target;

	// fag
	const $detail = element.closest('*[data-detail]')

	if($detail) {
		e.preventDefault()


		if($detail.classList.contains('open')) {
			$detail.classList.remove('open')
			return
		}

		$detail.parentElement.querySelectorAll('*[data-detail]').forEach((item) => {
			item.classList.remove('open')
		})

		$detail.classList.add('open')

	}
})


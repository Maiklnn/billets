document.addEventListener('click', function (e) {
	const element = e.target;
	if (element.classList.contains('tab__link')) {
		e.preventDefault()


		let tabs = (element) => {
			console.log(element)
			if(element.dataset.tab) { // если есть атрибут data
				// let parentTabs = element.closest('.tab__link-container') // отбираем tab__link-container
				let parentTabs = element.closest('.cities-item') // отбираем tab__link-container
				let tabLinkActiv = parentTabs.querySelector('.tab__link--active') // отбираем tab__link--active
				// let tabContentActiv = document.querySelector('*[data-contentTab="'+tabLinkActiv.dataset.tab+'"]') // отбираем активный tab__content
				let tabContentActiv = parentTabs.querySelector('*[data-contentTab="'+tabLinkActiv.dataset.tab+'"]') // отбираем активный tab__content
				console.log(tabContentActiv)
				// удаляем активные классы
				tabLinkActiv.classList.remove('tab__link--active')
				tabContentActiv.classList.remove('tab__content-item--active')

				element.classList.add('tab__link--active') // добовляем активный класс ссылке
				// let tabContent = document.querySelector('*[data-contentTab="'+element.dataset.tab+'"]') // отбираем активный tab__content
				let tabContent = parentTabs.querySelector('*[data-contentTab="'+element.dataset.tab+'"]') // отбираем активный tab__content
				tabContent.classList.add('tab__content-item--active') // добовляем активный класс ссылке

			} else {
				let parentTabs = element.closest('.tab') // отбираем tab

				let $tabLinkActiv = parentTabs.querySelector('.tab__link--active') // отбираем tab__link--active
				let $tabContentActiv = parentTabs.querySelector('.tab__content-item--active')

				let $tabLink = parentTabs.querySelectorAll('.tab__link')
				let $tabsContent = parentTabs.querySelectorAll('.tab__content-item')


				$tabLinkActiv.classList.remove('tab__link--active')
				$tabContentActiv.classList.remove('tab__content-item--active')

				element.classList.add('tab__link--active')

				$tabLink.forEach((item, key) => {
					let tabClass = item.className.indexOf('tab__link--active')

					if(tabClass >= 1)
					{
						let array = [...$tabsContent]
						array[key].classList.add('tab__content-item--active')
					}
				})
			}




		}

		tabs(element)

	}
})

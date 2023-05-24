



window.addEventListener("DOMContentLoaded", function() {

	document.addEventListener('click', function (e) {
		const element = e.target;

		// tab
		if (element.closest('.tab__link')) {
			e.preventDefault()


			let tabs = (element) => {
					if(element.dataset.tab) { // если есть атрибут data
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
					// отбираем tab контейнер
					let parentTabs = element.closest('.tab')

					// отбираем и очищаем активный tab__link--active
					let tabLinkActiv = parentTabs.querySelector('.tab__link--active');
					tabLinkActiv.classList.remove('tab__link--active');

					// очищаем активный таб контент
					let tabContentActiv = parentTabs.querySelector('.tab__content-item--active');
					tabContentActiv.classList.remove('tab__content-item--active')

					// ccылка по которой кликнули
					let tabLink = element.closest('.tab__link');
					tabLink.classList.add('tab__link--active');




					let $tabLinks = parentTabs.querySelectorAll('.tab__link')
					let $tabsContents = parentTabs.querySelectorAll('.tab__content-item')

					$tabLinks.forEach((item, key) => {
						let tabClass = item.className.indexOf('tab__link--active')

						if(tabClass >= 1)
						{
							let array = [...$tabsContents]
							array[key].classList.add('tab__content-item--active')
						}
					})
				}




			}

			tabs(element)

		}




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

});



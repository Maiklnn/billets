document.addEventListener("DOMContentLoaded", () => {
	document.addEventListener('click', (e) => {
		if(e.target.classList.contains('project-trigger')) {
			let item = e.target.closest('project-item');
			if(item) {
				let projects = e.target.closest('section-projects');
				let id = item.dataset.id;
				let tab = projects.querySelector(`[id="project-details-id-${id}"]`);
				tab.classList.add('active')
			}


			// let id = item.dataset.id;
			let id = 1614
			let tab = document.querySelector(`[id="project-details-id-${id}"]`);
			tab.classList.add('active')
			console.log(tab);
		}

	})
});



	    // --------------------------------цели

		// js
	    document.addEventListener("DOMContentLoaded", () => {
		    document.addEventListener('click', (e) => {

                if(e.target.classList.contains('button')) {
                	let form = e.target.closest('form');
                	let target = form.dataset.target
                	if(target === 'modal') {
                		let error = form.querySelector('.error_message');
                		if(!error) {
                			yaCounter12224143.reachGoal('target_zv')
                			console.log('Цель сработала');
                		}
                	}
                }


		    })
	    });

	    // успешная отправка сообщения diafan
	    diafan_ajax.success['feedback_add'] = function(form, response) {
	        if(response.result && response.result === 'success') {
	            let form_name = form[0].dataset.form;
	            if(form_name == 'obr_zvonok') { // Заказ обратного звонка
	                yaCounter51639806.reachGoal('obr_zvonok');
	            }
	        }
	    }

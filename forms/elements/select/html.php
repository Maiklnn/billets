<-- css --!>
	<style>
		.placeholder-container__input,
		.placeholder-container__textarea {
			border: none;
			width: 100%;
			background-color: #fff;
			padding: 0 0 0 30px;
			border-radius: 5px;
		}

		.placeholder-container__input:focus,
		.placeholder-container__textarea:focus {
			outline: 0;
			outline-offset: 0;
			border-bottom: 1px solid #f0582c;
		}

		.placeholder-container__input {
			height: 66px;
		}

		.placeholder-container__textarea {
			height: 100px;
			padding: 20px;
		}

		.placeholder-container input:focus+label,
		.placeholder-container textarea:focus+label,
		.placeholder-container input:not(:placeholder-shown)+label,
		.placeholder-container textarea:not(:placeholder-shown)+label {
			top: -2px;
			left: 30px;
			font-size: 11px;
			background-color: #f0582c;
			padding: 2px 10px;
			color: #fff;
		}

		.btn {
			display: inline-block;
			padding: 0 50px;
			text-align: center;
			line-height: 63px;
			color: #000;
			font-size: px-to-em(15px);
			text-transform: uppercase;
			background: #55c5d9;
			transition: all 0.5s;
			cursor: pointer;
			border: none;
			border-radius: 35px;
			font-weight: 700;
		}

		.btn:focus {
			outline: 0;
			outline-offset: 0;
		}

		.btn:hover {
			background: #f0582c;
			color: #fff;
		}

		@media screen and (min-width: 550px) {
			.footer-form__top {
				display: flex;
				gap: 10px;
			}
		}
	</style>

<-- html --!>

	<form class="footer-form">
		<div class="footer-form__top">

			<div class="placeholder-container">
				<input class="placeholder-container__input _necessarily" type="text" name="nameUser" placeholder=" ">
				<label class="placeholder-container__text">Имя</label>
			</div>
			<div class="placeholder-container">
				<input class="placeholder-container__input _necessarily" type="text" name="nameUser" placeholder=" ">
				<label class="placeholder-container__text">Телефон</label>
			</div>

		</div>

		<div class="placeholder-container">
			<textarea class="placeholder-container__textarea _necessarily" type="text" name="textUser" name="textUser"
				placeholder=" "></textarea>
			<label class="placeholder-container__text">Сообщение</label>
		</div>

		<button class="btn">Отправить</button>

	</form>
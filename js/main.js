const menuBtn = document.querySelector('._btn-menu');
const menuMobile = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
	menuMobile.classList.toggle('_menu-open')
});

const swiperClients = new Swiper('.clients__slider', {
	loop: true,

	// Optional parameters
	pagination: {
		el: '.swiper-pagination',
	},
});

const swiperCertificates = new Swiper('.certificates__slider', {
	loop: true,

	breakpoints: {
		660: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		400: {
			slidesPerView: 2,
		},
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		}
	},


	// Optional parameters
	pagination: {
		el: '.swiper-pagination',
	},
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
	accordeonTitle.addEventListener('click', function () {

		const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');

		accordeonTitle.classList.toggle('--active');
		currentText.classList.toggle('--active');

		if (currentText.classList.contains('--active')) {
			currentText.style.maxHeight = currentText.scrollHeight + 'px'
		} else {
			currentText.style.maxHeight = null;
		}

	});
});
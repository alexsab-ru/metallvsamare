import Swiper, { Lazy, Pagination, Navigation, EffectFade } from 'swiper';

Swiper.use([Lazy, Pagination, Navigation, EffectFade]);

let bannerSlider;
let loop = false;

const initSlider = (num = 0, loop) => {
	bannerSlider = new Swiper('.banner-slider', {
		loop: loop,
		slidesPerView: 1,
		speed: 1000,
		preloadImages: false,
		lazy: true,
		initialSlide: num,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
			clickable: true,
		},
		breakpoints: {
			320: {
				pagination: false
			},
			580: {
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
					clickable: true,
				},
			},
		}
	})
}

const slides = document.querySelectorAll('.banner-slide');

if (slides.length > 1) loop = true;

initSlider(0, loop);

const galarySlider = new Swiper('.galary-slider', {
	loop: false,
	speed: 1000,
	spaceBetween: 20,
	preloadImages: false,
	lazy: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets', //'bullets' | 'fraction' | 'progressbar' | 'custom'
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			// autoHeight: true
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 4,
		},
	},
})

galarySlider.on('lazyImageReady', function (swiper, slideEl, imageEl) {
	setTimeout(() => {
		const parent = document.querySelector('.galary-slider');
		const active = parent.querySelector('.swiper-slide-active');
		const slides = parent.querySelectorAll('.galary-slide');
		const height = active.clientHeight;
		slides.forEach(slide => {
			slide.style.minHeight = `${height}px`;
		})
	}, 100)
});

require('fslightbox');

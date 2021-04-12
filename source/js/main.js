import $ from 'jquery';
import './slick.min.js';

$(document).ready(function () {
	$('.projects-slider').slick({
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 2500,
		arrows: true,
		dots: false,
		nextArrow: '<button class="projects-slider__prev-arrow"><svg width="20" height="6"><use xlink:href="#arrow-next"></use></svg></button>',
		prevArrow: '<button class="projects-slider__next-arrow"><svg width="20" height="6"><use xlink:href="#arrow-prev"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					autoplay: false,
					arrows: false,
					dots: true
				}
			}
		]
	});
	$('.features-slider ').slick({
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		fade: true,
		autoplaySpeed: 2500,
		nextArrow: '<button class="features-slider__prev-arrow"><svg width="20" height="6"><use xlink:href="#arrow-next"></use></svg></button>',
		prevArrow: '<button class="features-slider__next-arrow"><svg width="20" height="6"><use xlink:href="#arrow-prev"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					autoplay: false,
					arrows: false,
					dots: true
				}
			}
		]
	});
	$('.slider-staff').slick({
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		speed: 1500,
		autoplaySpeed: 2500,
		nextArrow: '<button class="slider-staff__prev-arrow"><svg width="20" height="6"><use xlink:href="#arrow-next"></use></svg></button>',
		prevArrow: '<button class="slider-staff__next-arrow"><svg width="20" height="6"><use xlink:href="#arrow-prev"></use></svg></button>',
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					autoplay: false,
					arrows: false,
					dots: true
				}
			}
		]
	});
});

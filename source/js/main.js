import 'regenerator-runtime'
import GnativeCarousel from './GnativeCarousel'

window.addEventListener('load', () => {

	new GnativeCarousel({
		mainElement: {
			class: 'first',
			keepOrder: true
		},
		animationTime: 300,
		sliderContainer: '.firstExample .container .GnativeCarousel',
		itemsContainer: '.firstExample .container .GnativeCarousel .GnativeCarousel__itemsContainer',
		staticItem: '.firstExample .container .GnativeCarousel .GnativeCarousel__staticItem',
		btnsContainer: '.firstExample .container .GnativeCarousel .GnativeCarousel__buttons',
		btnNext: '.firstExample .container .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__next',
		btnPrev: '.firstExample .container .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__prev',
		itemsOnSide: 5,
		adaptive: true,
		breakpoints: {
			'1100': { itemsOnSide: 4 },
			'960': { itemsOnSide: 3, responsive: true },
			'768': { itemsOnSide: 2, responsive: true },
		}
	}).createSlider()
})

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
      '960': {
        itemsOnSide: 3,
        responsive: true,
        secondItems: {
          scale: 0.3,
          visibleWidth: 40
        },
        otherItems: {
          scale: 1.3,
          visibleWidth: 20
        }
      },
      '768': {
        itemsOnSide: 2,
        responsive: true,
        secondItems: {
          scale: 0.9,
          visibleWidth: 30
        },
        otherItems: {
          scale: 0.9,
          visibleWidth: 30
        }
      },
    }
  }).createSlider()
})

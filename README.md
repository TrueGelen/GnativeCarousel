# [GnativeCarousel](https://truegelen.github.io/GnativeCarousel/dist/)
[Link to this page](https://truegelen.github.io/GnativeCarousel/dist/)

Usage
-----------------------------
#### The expamle:
````js
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
  ````
  
  ### Default settings
  
````js
  this.defaultSettings = {
			//number
			animationTime: 300,
			//string. is required. '.someSection .someClass' 
			sliderContainer: undefined,
			//string. is required. '.someSection .someClass' 
			itemsContainer: undefined,
			//string. '.someSection .someClass' 
			staticItem: undefined,
			//string. '.someSection .someClass' 
			btnsContainer: undefined,
			//string. '.someSection .someClass' 
			btnNext: undefined,
			//string. '.someSection .someClass' 
			btnPrev: undefined,
			//object
			mainElement: {
				//string
				class: undefined,
				//boolean
				keepOrder: false
			},
			//number
			itemsOnSide: 3,
			//boolean (if adaptive and responsive are true then actually it will be responsive: true)
			adaptive: false,
			//boolean
			responsive: true,
			//object {'1100': { itemsOnSide: 4, adaptive: true},
			//				'960': { itemsOnSide: 3, responsive: true }, 
			//				'768': { itemsOnSide: 2 }}...
			//if you do not define any of these keys, it will be assigned the previous value
			breakpoints: undefined,
		}
  ````
  
  ### If you want to have more buttons, you can use method "doSlide(nodeElement, 'direction')":
  #### The expample:
  
  ````js
  let slider = new GnativeCarousel({...})
	slider.createSlider()

	const secondaryBtnNext = document.querySelector('.someSection .otherButtons .otherButtons_button-next')
	const secondaryBtnPrev = document.querySelector('.someSection .otherButtons .otherButtons_button-prev')

	slider.doSlide(secondaryBtnNext, 'next')
	slider.doSlide(secondaryBtnPrev, 'prev')
  ````
  


# [GnativeCarousel](https://truegelen.github.io/GnativeCarousel/dist/)
[Link to this page](https://truegelen.github.io/GnativeCarousel/dist/)

Usage
-----------------------------
#### The example js:
````js
new GnativeCarousel({
		mainElement: {
			class: 'first',
			keepOrder: true
		},
		animationTime: 300,
		sliderContainer: '.firstExample .GnativeCarousel',
		itemsContainer: '.firstExample .GnativeCarousel .GnativeCarousel__itemsContainer',
		staticItem: '.firstExample.GnativeCarousel .GnativeCarousel__staticItem',
		btnsContainer: '.firstExample .GnativeCarousel .GnativeCarousel__buttons',
		btnNext: '.firstExample .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__next',
		btnPrev: '.firstExample .GnativeCarousel .GnativeCarousel__buttons .GnativeCarousel__prev',
		itemsOnSide: 5,
		adaptive: true,
		breakpoints: {
			'1100': { itemsOnSide: 4 },
			'960': { itemsOnSide: 3, responsive: true },
			'768': { itemsOnSide: 2 },
		}
	}).createSlider()
  ````
  
  #### The example HTML:
  ````html
<div class="GnativeCarousel">
	<img class="GnativeCarousel__staticItem" src="./path" alt="layout">
	<div class="GnativeCarousel__itemsContainer">
		<img src="./img/slider/1.png" class="first" alt="img1">
		<img src="./img/slider/2.png" alt="img2">
		<img src="./img/slider/3.png" alt="img3">
		<img src="./img/slider/4.png" alt="img4">
		<img src="./img/slider/5.png" alt="img5">
		<img src="./img/slider/6.png" alt="img6">
		<img src="./img/slider/7.png" alt="img7">
		<img src="./img/slider/8.png" alt="img8">
		<img src="./img/slider/9.png" alt="img9">
		<img src="./img/slider/10.png" alt="img10">
		<img src="./img/slider/11.png" alt="img11">
	</div>
	<div class="GnativeCarousel__buttons">
		<div class="GnativeCarousel__button GnativeCarousel__prev">
			Previous
		</div>
		<div class="GnativeCarousel__button GnativeCarousel__next">
			Next
		</div>
	</div>
</div>
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
  #### The example:
  
  ````js
  let slider = new GnativeCarousel({...})
	slider.createSlider()

	const secondaryBtnNext = document.querySelector('.someSection .otherButtons .otherButtons_button-next')
	const secondaryBtnPrev = document.querySelector('.someSection .otherButtons .otherButtons_button-prev')

	slider.doSlide(secondaryBtnNext, 'next')
	slider.doSlide(secondaryBtnPrev, 'prev')
  ````

Lazy loading
-------------------------
If you want to use the lazy loading that you should add the "Glazy" class for a slide or elements which are inner of slide.

#### The example HTML:
 ````html
<div class="GnativeCarousel">
	<div class="GnativeCarousel__itemsContainer">
		<img src="./img/slider/1.png" class="Glazy" alt="img1">
    <img src="./img/slider/2.png" class="Glazy" alt="img2">
    
    <!-- or -->
    <div>
        <img data-src="img/slider2/slider2__img1.jpg" alt="card" class="Glazy">
    </div>
    <div>
      <img data-src="img/slider2/slider2__img2.jpg" alt="card" class="Glazy">
    </div>
</div>
````
Also you need to add `lazyLoad` to settings. The example `new GnativeCarousel({...lazyLoad: 1})` and the value has to be a number.

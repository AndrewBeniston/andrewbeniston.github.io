var isAnimating = false;

$(document).ready(function() {

	// For Videos
	heroVideo();

	// video showreel carousel
	$('.hero-carousel').each(function(){

		var self = $(this);

		self.owlCarousel({
			items: 1,
			loop: true,
			center: true,
			margin: 32,
			nav: true,
			navText: ['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			responsiveClass: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1
				},
				// breakpoint from 480 up
				768: {
					items: 2
				},
				// breakpoint from 480 up
				992: {
					items: 4
				},
				1200: {
					items: 4,
					margin: 64
				},
				1600: {
					items: 4
				},
				2000: {
					items: 6
				},
				2400: {
					items: 7
				},
				3200: {
					center: false,
					loop: false,
					items: 8
				}
			}
		});


	}); 
    
	// Enable Typr Writer
	$('.js-mixed-messages span').typed({
		strings: ['a filmmaker', 'a web developer', 'an evangelist', 'a proffesional', 'a videographer', 'an expert', 'a programmer', 'a photographer', 'an editor', 'a designer', 'a sportsman' , 'a geek'],
		typeSpeed: 20,
		backDelay: 4000,
		loop: true,
		loopCount: false
	});

});




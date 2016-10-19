"use strict";var isAnimating=!1;$(document).ready(function(){heroVideo(),$(".hero-carousel").each(function(){var e=$(this);e.owlCarousel({items:1,loop:!0,center:!0,margin:32,nav:!0,navText:['<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>'],dots:!0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:1},768:{items:2},992:{items:4},1200:{items:4,margin:64},1600:{items:4,margin:64},2e3:{items:6,margin:64},2400:{items:7,margin:64},3200:{center:!1,loop:!1,items:8,margin:64}}})}),$(".js-mixed-messages span").typed({strings:["a filmmaker","a web developer","an evangelist","a proffesional","a videographer","an expert","a programmer","a photographer","an editor","a designer","a sportsman","a geek"],typeSpeed:20,backDelay:4e3,loop:!0,loopCount:!1})});},
				2000: {
					items: 6,
					margin: 64
				},
				2400: {
					items: 7,
					margin: 64
				},
				3200: {
					center: false,
					loop: false,
					items: 8,
					margin: 64
				}
			}
		});


	}); 
    
	// Enable Typr Writer
	$('.js-mixed-messages span').typed({
		strings: ['a filmmaker', 'a web developer', 'an evangelist', 'a proffesional', 'a videographer', 'an expert', 'a programmer', 'a photographer', 'an editor', 'a designer', 'a sportsman' , 'a geek'],
		typeSpeed: 20, // typing speed
		backDelay: 4000, // pause before backspacing
		loop: true, // loop on or off (true or false)
		loopCount: false, // number of loops, false = infinite
	});

});




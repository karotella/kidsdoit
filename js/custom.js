(function($){
    'use strict';

  	//Counter up
	$('.counter').counterUp({
		delay: 10,
    	time: 1500
	});

  	//Testimonial slider
	var swiper = new Swiper('.testimonial-slider', {
	    slidesPerView: 3,
    	autoplay: 2000,
	    spaceBetween: 30,
	    breakpoints: {
		    // when window width is <= 580px
		    580: {
		      slidesPerView: 1
		    },
		    // when window width is <= 991px
		    991: {
		      slidesPerView: 2
		    }
		  }
	    });


})(jQuery);	  
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

	$('.slick-slider').slick({
    	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 2000,
	  	dots: true,
	  	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
	]
	});

})(jQuery);	  
(function ($) {
	"use strict";

	///////////////////////////////////////////////////
	// Sticky Header Js
	var windowOn = $(window)
	windowOn.on('scroll', function () {
		var scroll = windowOn.scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	})//

	//Slider One

	$('.brand_service_slider').slick({
		dots: false,
		infinite: true,
		speed: 5000,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay:false,
		autoplaySpeed:0,
		arrows:false,
		cssEase: 'marquee',
		pauseOnFocus:false,
		pauseOnHover:false,
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
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
// Video Popup Script
$('.play_video').magnificPopup({
	type:'iframe'
});

					  




})(jQuery);
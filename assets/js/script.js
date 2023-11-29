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
  //Counter Scrript

  jQuery(document).ready(function($) {
	$('.counter_item').counterUp({
		delay: 10,
		time: 1000
	});
})

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

//Project Slider 

$('.project_slider_wrapper').slick({
	infinite:true,
	arrows:true,
	prevArrow: `<div class="slick-prev"><i class="fa-solid fa-arrow-right fa-rotate-180"></i></div>`,
	nextArrow: `<div class="slick-next"><i class="fa-solid fa-arrow-right"></i></div>`,
	slidesToShow: 2,
	slidesToScroll: 2,
	autoplay: false,
	pauseOnHover:false,
	variableWidth:true,
	autoplaySpeed: 2000,
	responsive:[
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false,
			  arrows:true,
			}
		  },
	]
  });

  //Partner Slider 

$('.brand_slider_one').slick({
	infinite:true,
	arrows:true,
	slidesToShow: 6,
	slidesToScroll: 1,
	autoplay: false,
	arrows:false,
	pauseOnHover:false,
	autoplaySpeed: 2000,
	responsive:[
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false,
			  arrows:true,
			}
		  },
	]
  });

  //Partner Slider Two 

$('.brand_slider_content_area_two').slick({
	infinite:true,
	arrows:true,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	arrows:false,
	pauseOnHover:false,
	autoplaySpeed: 2000,
	responsive:[
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false,
			  arrows:true,
			}
		  },
	]
  });

  //Testimonial Slider ONe

	$('.testimonial_slider_area_one').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:false,
		arrows:false,
		pauseOnHover:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
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
  //Testimonial Slider ONe

	$('.testimonial_slider_area_two').slick({
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:false,
		arrows:false,
		pauseOnHover:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
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
  //Award Slider

	$('.awared_slider_area').slick({
		dots: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay:false,
		arrows:false,
		pauseOnHover:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
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

	
	
	 
					  




})(jQuery);
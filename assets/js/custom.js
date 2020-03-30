$(document).ready(function(){

	// scroll function for header background on scroll //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		//>=, not <=
		if (scroll > 0) {
			//clearHeader, not clearheader - caps H
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	});

	// click on menu taggle button
	$(".hamburger").click(function(){
	  $("body").toggleClass("menu-button-clicked");
	});
    
    $(".main-nav-box ul li a").click(function(){
        $("body").removeClass("menu-button-clicked");
    });

	// step slider synced with dot slider
	$('.steps-slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    infinite: true,
        adaptiveHeight: true,
	    fade: true,
	    asNavFor: '.steps-dots',
		autoplay: false,
	    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        dots: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        dots: true
	      }
	    }
	  ]

	});
	$('.steps-dots').slick({
	    slidesToShow: 7,
	    slidesToScroll: 1,
	    asNavFor: '.steps-slider',
	    dots: false,
	    infinite: true,
	    focusOnSelect: true,
	    responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        slidesToShow: 3
	      }
	    }
	  ]

	});

	// benifites slider for mobile
	$('.benefits-slider-for-mob').slick({
		dots: false,
		arrows: true,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 700,
		slideToScroll:1,
		cssEase: 'linear',
	});

	$("header ul li:last-child a").attr('target','_blank');





	$('.abilities-video-slider').slick({
		dots: true,
		arrows: true,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 700,
		slidesToShow: 5,
		slideToScroll:1,
		adaptiveHeight: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slideToScroll:1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slideToScroll:1
				}
			}
		]
	});



});
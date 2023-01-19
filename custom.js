$(document).ready(function(){

	//fullpage plugin initialization
	$('#fullpage').fullpage({
		anchors:['firstPage', 'secondPage', 'thirdPage', '4thPage', '5thPage', '6thPage'],
		menu:'#js-menu',
		autoScrolling: false
	});

	// logo change when scroll
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--scrolling");
		}
		else{
			$header.removeClass("header--scrolling")
		}
	})

	// carousel plugin initialization
	$('.owl-carousel').owlCarousel({
    	loop:true,
    	margin:0,
    	nav:true,
    	navText:[],
    	dots:false,
    	responsive:{
        	0:{
            	items:1
        	},
        	768:{
            	items:1
        	},
        	1000:{
            	items:1
        	}
    	}
	})

});
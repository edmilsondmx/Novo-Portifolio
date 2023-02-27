(function($){
	jQuery(document).ready(function(){
		// Slider
		$('#t_slider').owlCarousel({
			loop:true,
			margin:0,
			center:true,
			autoplay:true,
			dots:false,
			nav:true,
			navText:['<img src="assets/images/arrow-left.png" height="60" width="42" alt="">','<img src="assets/images/arrow-right.png" height="60" width="42" alt="">'],
			responsive:{
				0:{
					items:1,
					center:false,
					nav:false,
					dots:true
				},
				600:{
					items:1,
					center:true,
					dots:true

				},
				1000:{
					items:3
				}
			}
		})
		// Video Responsive
		$("body").fitVids();
	});
})(jQuery);

  

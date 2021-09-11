$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		CenterMode:true,
		slidesToShow:1.7,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1.5
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});


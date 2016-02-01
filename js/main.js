jQuery(document).ready(function($) {

/*	function run() {
		var el = document.querySelector('.transition');
		el.className += 'active';
	}

	setTimeout(run, 1000);
	
*/


	$('.h_nav a').click(function() {
		var moduleNav = $(this).attr('href');
		$('.c_bot-ins').removeClass('active');
		$(moduleNav+', .c_bot').addClass('active');

	});

	$('.c_bot-close').click(function() {
		$('.c_bot').removeClass('active');
	});


	$('.navi_btn').click(function() {
		$('.navi, .navi_bg, .navi_btn span').toggleClass('active');
	});

	$('.navi_btn span').on('hover', function() {
		$('.navi_btn i').toggleClass('active');
	});






});
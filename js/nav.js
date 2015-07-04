$(function() {
	//Toggle navigation menu bar
	$('.nav-menu').hide();
	$('.nav-image').on('click', function() {
		$('.nav-menu').slideToggle(300, function(){
			//Animation complete;
		});
	});
	//Back-to-Top button
	$('.back-to-top').hide();
	var offset = 400;
	var duration = 300;
	$(window).scroll(function(){
		if($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	$('.back-to-top').click(function(event){
		event.preventDefault();
		var is_chrome = !!window.chrome;
		if(is_chrome) {
			$('html, body').animate({scrollTop: 0}, 1000);	
		} else {
			$('html, body').animate({scrollTop: 0}, 1000);	
		}
		return false;
	});
});
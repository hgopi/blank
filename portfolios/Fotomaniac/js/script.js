$(document).ready(function(){
	//navigation list highlight
	$('nav li').on('click', function() {
		$('nav li').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});
	
	//for Gallery image view
	$('div.thumbnails').on('click', function(){
		var img = $(this).find('img').attr('src');
		$('#fullsize').attr('src', img).fadeIn(600);
	});
		
});

//show dialog box
function showDialog(divId) {
	var div = document.getElementById(divId);
	div.style.display = 'block';
	$('div.overlay').css({'display': 'block'});
}
//hide the dialog box
function closeDialog(divId) {
	var div = document.getElementById(divId);
	div.style.display = 'none';
	$('div.overlay').css({'display': 'none'});
}
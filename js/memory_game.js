var prevClickSrc, thisClickSrc, thisClickId, prevClickId, clickCount = 0, clicks = 0, scoreCount = 0, time = 0, t;
$(document).ready(function(){
		var arrayOfImages = ["anchor-outline.png", "battery-full.png", "battery-mid.png", "chart-bar.png", "device-desktop.png", "flash-outline.png", "location-arrow.png", "media-eject.png", "notes.png", "pen.png", "scissors-outline.png", "social-facebook.png", "social-skype-outline.png", "social-skype.png", "th-small.png", "wi-fi.png", "lightbulb.png", "star-outline.png"];
		var idArray = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r2c1", "r2c2", "r2c3", "r2c4", "r2c5", "r2c6", "r3c1", "r3c2", "r3c3", "r3c4", "r3c5", "r3c6", "r4c1", "r4c2", "r4c3", "r4c4", "r4c5", "r4c6", "r5c1", "r5c2", "r5c3", "r5c4", "r5c5", "r5c6", "r6c1", "r6c2", "r6c3", "r6c4", "r6c5", "r6c6"];
		var click = 0;
		for(var i = 0; i < 18; i++) {
			var id1 = idArray[Math.floor(Math.random() * idArray.length)];
			var remove1 = idArray.indexOf(id1)
			idArray.splice(remove1, 1);
			var img1 = new Image();
			img1.src = 'images/' + arrayOfImages[i];
			var assign1 = document.getElementById(id1);
			assign1.appendChild(img1);
			var id2 = idArray[Math.floor(Math.random() * idArray.length)];
			var remove2 = idArray.indexOf(id2)
			idArray.splice(remove2, 1);
			var img2 = new Image();
			img2.src = 'images/' + arrayOfImages[i];
			var assign2 = document.getElementById(id2);
			assign2.appendChild(img2);
		}
		
		

		$('.card').on('dblclick', function(e){
			e.preventDefault();
    		e.stopPropagation();
			return false;
		}).on('click', function(e){
			clickCount++;
			$('#clickCount').html(clickCount);
			$('img').each(function(){
					$(this).removeClass('visible').parent().removeClass('rotate');
				});
			$(this).toggleClass('rotate').find('img').toggleClass('visible');
			thisClickSrc = $(this).find('img').attr('src');
			thisClickId = $(this).attr('id')
			if(thisClickSrc === prevClickSrc && thisClickId !== prevClickId) {
				$(this).animate({opacity: 0}, 500);
				$('img[src="'+ thisClickSrc + '"]').parent().animate({opacity: 0}, 500);
				scoreCount += 2;
			} else prevClickSrc = thisClickSrc, prevClickId = thisClickId, thisClickId="", thisClickSrc = '';
			if(scoreCount >= 36) {
				clearInterval(t);
				var tUpdate = 'Total time ' + time + 's.';
				$('#timer').html(tUpdate);
				var avgTime = Math.floor(time / 18);
				var para = 'You took approximately ' + avgTime + ' clicks to find a pair!';
				$('#score').html(para);
			}
		});
	});

function timeUpdateFunc(){
	$('.prevent').hide(1000);
	t = setInterval(function(){
		time = time + 1;
	}, 1000);
	$('#start-button').attr('disabled',true);
	var count = $('#clickCount').html();
	if(count >= 1000){
		alert('Hey! What happened?\nAre you sleeping or what?\n\nHmm, I assume you are bored. Let\'s try something else');
		location.reload();	
	}
}
function resetFunc() {
	location.reload();
}

var audio = document.getElementById('a1');
var play = document.getElementById('play');
play.addEventListener('click', function(){
	audio.play();
});
var timeData = [
	{"start": "0.000", "end": "0.490", "text": "Coming"},
	{"start": "0.491", "end": "0.918", "text": "together"},
	{"start": "0.919", "end": "1.099", "text": "is"},
	{"start": "1.100", "end": "1.110", "text": "a"},
	{"start": "1.111", "end": "1.580", "text": "beginning"},
	{"start": "2.225", "end": "2.595", "text": "keeping"},
	{"start": "2.595", "end": "3.099", "text": "together"},
	{"start": "3.110", "end": "3.280", "text": "is"},
	{"start": "3.290", "end": "3.997", "text": "progress"},
	{"start": "4.127", "end": "4.427", "text": "working"},
	{"start": "4.523", "end": "4.933", "text": "together"},
	{"start": "4.943", "end": "5.073", "text": "is"},
	{"start": "5.074", "end": "5.873", "text": "success"},
	{"start": "6.944", "end": "7.390", "text": "Henry"},
	{"start": "7.543", "end": "7.909", "text": "Ford"},
];
audio.addEventListener('timeupdate', function(){
	timeData.forEach(function(element, index, array) {
			if(audio.currentTime >= element.start && audio.currentTime <= element.end) {
    		 	var highlightId = 'w' + index;
    			document.getElementById(highlightId).className = 'highlight';
    			var removeHightlight = 'w' + (index - 1);
    			document.getElementById(removeHightlight).className = '';
    			if(index > 2)
    				document.getElementById('w2').className = '';
    			if(index > 11)
    				document.getElementById('w10').className = '';
    		}
	});
});
if(audio.stop)
	document.getElementById('w14').className = '';

function showValue(self){
	getNextSibling(self).innerHTML = self.value;
	changeRadius();
	changeCSStext();
}
function getNextSibling(n) {
	var x = n.nextSibling;
	while (x.nodeType != 1) {
		x = x.nextSibling;
	}
	return x;
}
function changeCSStext() {
	var radiusContent = $('#bradius').text();
	document.getElementById('wkbradius').innerHTML = '-webkit-' + radiusContent;
	document.getElementById('mozbradius').innerHTML = '-moz-' + radiusContent;
	document.getElementById('obradius').innerHTML = '-o-' + radiusContent;
}
function changeRadius() {
	$('.border-radius').css("border-top-left-radius", function(){
		var num1 = $('#tl-value').text();
		document.getElementById('css-tl-value').innerHTML = num1;
		return Number(num1);
	});
	$('.border-radius').css("border-top-right-radius", function(){
		var num2 = $('#tr-value').text();
		document.getElementById('css-tr-value').innerHTML = num2;
		return Number(num2);
	});
	$('.border-radius').css("border-bottom-left-radius", function(){
		var num3 = $('#bl-value').text();
		document.getElementById('css-bl-value').innerHTML = num3;
		return Number(num3);
	});
	$('.border-radius').css("border-bottom-right-radius", function(){
		var num4 = $('#br-value').text();
		document.getElementById('css-br-value').innerHTML = num4;
		return Number(num4);
	});
}
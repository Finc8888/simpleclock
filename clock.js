//Без jQuery
// var clock = document.getElementById('clock');
// var color = document.getElementById('color');

// var clock = $("#clock").html();
// var color = $("#color").text();
// alert(clock);
// alert(color);

function hexClock(){
	var time = new Date();
	//you can do time.getHours())%12 for pm and am
	var hours = (time.getHours()).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2){
		hours = '0' + hours
	}
	if (minutes.length < 2){
		minutes = '0' + minutes
	}
	if (seconds.length < 2){
		seconds = '0' + seconds
	}

	var clockString = hours + ":" + minutes + ":" + seconds;
	var colorString = '#' + hours + minutes + seconds;

	// clock.textContent =  clockString;
	// color.textContent =  colorString;
	$("#clock").text(clockString);
	$("#color").text(colorString);

	document.body.style.background = colorString;
}

hexClock();
setInterval(hexClock,1000);
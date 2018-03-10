var os = require('os');
var time = os.uptime();
var hours = Math.floor(time / 3600);
var minutes = Math.floor((time - (hours * 3600)) / 60);
var seconds = Math.floor(time % 60);

function getTime() {	
	return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds'
}

exports.time = getTime;
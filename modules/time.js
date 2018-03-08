var os = require('os');

function getTime() {
	var time = os.uptime();
	var hours = Math.floor(time / 3600);
	var minutes = Math.floor((time - (hours * 3600)) / 60);
	var seconds = Math.floor(time % 60);
	return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds'
}

exports.time = getTime;
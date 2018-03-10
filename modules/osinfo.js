var os = require('os');
var uptime = require('../modules/time');
var release = os.release();
var cpu = os.cpus()[0].model;
var userInfo = os.userInfo();
var type = os.type();

function getOsInfo() {
	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
	}

	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime: ', uptime.time());
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
};

exports.print = getOsInfo;
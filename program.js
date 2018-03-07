var os = require('os');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	var help = 'ver - node version\n\
    compinfo - system information\n\
    lang - OS language\n\
    help - this info\n\
    exit - exit program\n';

	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case 'exit': 
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;
		 	case 'ver':
		 		process.stdout.write('Node version is: ' + process.versions.node + '\n');
		 	break;
		 	case 'lang':
		 		process.stdout.write('Environment language is: ' + process.env.lang + '\n');
		 	break;
		 	case 'osinfo':
		 		getOsInfo();
		 	break;
		 	case 'help':
				process.stdout.write('Usage: \n' + help);
			break;
		 	default:	
				process.stderr.write('Wrong instruction!\n');
		}
	}
});

function getOsInfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();

	if(type === 'Darwin') {
    	type = 'OSX';
	} else if(type === 'Windows_NT') {
    	type = 'Windows';
	}

	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}
//console.log(process.versions);
//console.log(process.env);
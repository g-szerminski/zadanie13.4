process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit': 
				process.stdout.write('Quitting app!\n');
				process.exit();
			break;
		 	case 'ver':
		 		process.stdout.write('Node version is: ' + process.versions.node + '\n');
		 	break;
		 	case 'lang':
		 		process.stdout.write('Environment language is: ' + process.env.lang + '\n');
		 	break;
		 	default:	
				process.stderr.write('Wrong instruction!\n');
		}
	}
});
//console.log(process.versions);
//console.log(process.env);
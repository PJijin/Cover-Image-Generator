const fs = require('fs');
const path = require('path');
const util = require('util');

const traverse = function(dir, result = []) {
	// list files in directory and loop through
	fs.readdirSync(dir).forEach(file => {
		// builds full path of file
		const fPath = path.resolve(dir, file);

		// prepare stats obj
		const fileStats = { file };

		// is the file a directory ?
		// if yes, traverse it also, if no just add it to the result
		fs.appendFile('file.json', file, function(err) {
			if (err) {
				return console.log(err);
			}

			console.log('The file was saved!');
		});

		result.push(fileStats);
	});

	return 'Done';
};

console.log(util.inspect(traverse(process.argv[2]), false, null));

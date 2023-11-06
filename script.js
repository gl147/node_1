const fs = require('fs');

const path = 'hello.txt';

fs.readFile(path, 'utf-8', (err, data) => {
	if (err) throw err;
	console.log(data)
})
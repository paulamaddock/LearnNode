var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response){
	var sourceFile = fs.createReadStream(process.argv[3]);
	sourceFile.pipe(response)
})

server.listen(process.argv[2]);


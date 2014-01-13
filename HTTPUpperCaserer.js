var http = require('http');
var map = require('through2-map');

http.createServer(function(src,dest){
	src.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(dest);
}).listen(process.argv[2]);
var http = require('http');
var bufferlist = require('bl');

http.get(process.argv[2],function(response){
	response.pipe(bufferlist(function(err, data){
		if (err){
			return console.error(data);
		}
		console.log(data.length);
		console.log(data.toString('utf8'));
	}))
})
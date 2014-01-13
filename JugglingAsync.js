var http = require('http');
var bufferlist = require('bl');

var queue = [];
var num = 0;

for (var i = 2; i < process.argv.length; i++) {
	queue.push(process.argv[i]);
};

i=0
makeRequest(queue[i]);

function makeRequest(request){
	http.get(request, function(response){
		response.pipe(bufferlist(function(err, data){
			if (err){
				return console.error(data);
			} else {
				i++
				if(queue[i]){
				makeRequest(queue[i])
				}
			}
			console.log(data.toString('utf8'));
		}))
	})
}
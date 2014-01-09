var http = require('http');

http.get(process.argv[2],function(response){
	response.on("data",function(data){
		console.log(data.toString('utf8'));
	});
	response.on("error",function(error){
		console.log(error);
	});
	response.on("end",function(end){
		console.log("");
	});
})
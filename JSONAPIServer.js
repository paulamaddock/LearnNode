var http = require('http');
var url = require('url');

http.createServer(function(request,response){
	var apiRequest = url.parse(request.url, true);
	response.writeHead(200, {'Content-Type': 'application/json'});
	if(apiRequest.pathname === '/api/unixtime'){
		var requestedTime0 = new Date(apiRequest.query.iso);
		response.write(JSON.stringify({'unixtime': requestedTime0.getTime()}));
	}
	if(apiRequest.pathname === '/api/parsetime' && apiRequest.search){
		var requestedTime = new Date(apiRequest.query.iso);
		var timeObject = {"hour":requestedTime.getHours() ,"minute": requestedTime.getMinutes() , "second": requestedTime.getSeconds() }
		response.write(JSON.stringify(timeObject));
	}
}).listen(process.argv[2]);
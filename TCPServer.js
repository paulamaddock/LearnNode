var net = require('net');

var server = net.createServer( function(socket) {
	var currentTime = new Date();
	var month = currentTime.getMonth() +1
	if (month < 10){
		month = "0" + month
	}
	var timeString = currentTime.getFullYear() + "-" + month + "-" + currentTime.getDate() 
	+ " " + currentTime.getHours() + ":" + currentTime.getMinutes()
	socket.write(timeString);
	socket.write("");
	socket.end();
})
server.listen(process.argv[2]);

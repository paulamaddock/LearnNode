var fs = require('fs');
var path = require('path');
module.exports = function (dir,filter,callback) {
	fs.readdir(dir,function(err, list){

		if (err){
			callback(err);
		} else {
			var extString = '.' + filter;
			var filteredFiles = new Array();
			for(var i = 0; i <list.length;i++){
				if (path.extname(list[i]) === extString){
					filteredFiles.push(list[i]);
				}
			}
			callback(null,filteredFiles);
		}
	});
}
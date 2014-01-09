var fs = require('fs');
console.log(Number(fs.readFileSync(process.argv[2]).toString().split("\n").length - 1));
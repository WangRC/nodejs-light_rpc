var light_rpc = require('./index.js');
var fs = require('fs');

var file = JSON.parse(fs.readFileSync('/home/roman/data.json'));

var port = 5556;

var rpc = new light_rpc({
	combine: function(a, b, callback){
		callback(a + b);
	},
	multiply: function(t, cb){
		cb(t*2);
	},
	getFile: function(cb){
		cb(file);
	}
});
rpc.listen(port);
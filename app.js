var express = require("express"),
	restler = require("restler");

var app = express.createServer();

app.all('/', function(req, res){
	restler.get("http://reddit.com/.json").on('complete', function(reddit){
		var titles ="";
		for(var i=0; 1<5; i++){
			titles += reddit.data.children[1].data.title;
		}
		res.send(titles);
	});
});

app.listen(5000);
console.log("redSMS listening on 5000");
var express = require("express"),
	restler = require("restler");

var app = express.createServer();

app.all('/:subreddit', function(req, res){
	restler.get("http://www.reddit.com/r/"+ req.params.subreddit + ".json").on('complete', function(reddit){
		var reddit_data = reddit.data.children;
		var titles = new Array();
		var i = 0;
		while (i<5){
			
			titles[i] = i+": " + reddit_data[i].data.title;
			i++
		}
		res.send(titles);
		//console.log("Got it sending it out!");
		//res.send(reddit_data[1].data.title);
	});
});

app.listen(5000);
console.log("redSMS listening on 5000");
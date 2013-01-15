var express = require("express"),
	restler = require("restler");

var app = express.createServer();

app.all('/:subreddit', function(req, res){
	if (req.url === '/favicon.ico') {
    	res.writeHead(200, {'Content-Type': 'image/x-icon'} );
    	res.end();
    	return;
  	}
	restler.get("http://www.reddit.com/r/"+ req.params.subreddit + ".json").on('complete', function(reddit){
		var reddit_data = reddit.data.children;
		var titles = "<Response>";
		var i = 0;
		while (i<5){
			titles += "<Sms>" + i + ": " + reddit_data[i].data.title + "</Sms>";
			i++
		}
		titles += "</Response>"
		res.send(titles);
	});
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
console.log("Listening on " + port);
});
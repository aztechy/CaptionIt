var engines = require('consolidate');
var express = require('express');
var app = express();

app.configure(function() {
	app.engine('html', engines.hogan);	
	
	// Define where our static resources reside and look up precedent.
	app.use('/js', express.static(__dirname + '/app/js'));
	app.use('/css', express.static(__dirname + '/app/css'));
	app.use(express.static(__dirname + '/app'));
});

var server = app.listen(1234, function() {
	console.log('server running on localhost:1234');
});
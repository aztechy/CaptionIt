var express = require('express');
var app = express();
var routes = require('./routes');

app.configure(function() {
  // app.use(express.json());
  // app.use(express.urlencoded());
  app.use(express.bodyParser());
	app.engine('html', require('ejs').__express);	
	app.set('view engine', 'html');
  app.set('views', __dirname + '/app/views');
  app.use(app.router);
	app.use(express.static(__dirname + '/app'));
});

// Define routing
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/authenticate', routes.authenticate);

var server = app.listen(1234, function() {
	console.log('server running on localhost:1234');
});
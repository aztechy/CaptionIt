var baseTitle = 'CaptionIt';
var connections = {};
var isLoggedIn = false;

exports.index = function(req, res, next) {
  if (connections[req.ip] === undefined) {
    res.redirect('/login');
  }
  
  res.render('index', {title: baseTitle, isLoggedIn: isLoggedIn});
}

exports.login = function(req, res, next) {
  if (connections[req.ip] === undefined) {
    res.render('login', {title: baseTitle + ' - Login', isLoggedIn: isLoggedIn});
  } else {
    res.redirect('/');
  }
}

exports.authenticate = function(req, res, next) {
  if (req.body.name === undefined) {
    res.redirect('/login');
  } else {
    connections[req.ip] = { name: req.body.name };
    isLoggedIn = true;
    
    res.redirect('/');
  }
}
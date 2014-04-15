var baseTitle = 'CaptionIt';

exports.index = function(req, res, next) {
  res.render('index', {title: baseTitle});
}

exports.login = function(req, res, next) {
  res.render('login', {title: baseTitle + ' - Login'});
}
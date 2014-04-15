var baseTitle = 'CaptionIt';
exports.index = function(req, res, next) {
  res.render('index', {title: baseTitle});
}

/*
 * GET about .
 */

exports.detail = function(req, res){
  res.render('about', { title: 'Alchemy', user: req.user });
};

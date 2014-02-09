
/*
 * GET about .
 */

exports.list = function(req, res){
  res.render('about', { title: 'Alchemy' });
};

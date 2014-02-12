
/*
 * GET login.
 */

exports.detail = function(req, res){
  res.render('login_detail', { 
  	title: 'Alchemy',
  	user: req.user 
  });
};

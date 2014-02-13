
/*
 * GET home page.
 */

exports.detail = function(req, res) {

	//console.log('req.user', req.user);

  	res.render('home', { title: 'Alchemy'});
};

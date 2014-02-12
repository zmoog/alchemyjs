
/*
 * GET home page.
 */

exports.index = function(req, res) {

	console.log('req.user', req.user);

  	res.render('index', { title: 'Alchemy', user: req.user });
};

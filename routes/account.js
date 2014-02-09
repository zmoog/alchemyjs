
/*
 * GET accounts listing.
 */

exports.list = function(req, res){
  res.render('account_list', { title: 'Alchemy' });
};

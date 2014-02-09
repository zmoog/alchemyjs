
/*
 * GET transfers listing.
 */

exports.list = function(req, res){
  res.render('transfer_list', { title: 'Alchemy' });
};

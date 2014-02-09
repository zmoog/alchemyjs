
/*
 * GET location.
 */

exports.list = function(req, res){
  res.render('location_list', { title: 'Alchemy' });
};

exports.detail = function(req, res) {
    res.render('location_detail', {
        project: {
            id: req.params.project_id,
            name: req.params.project_id
        },
        location: {
            id: req.params.detail_id,
            name: req.params.detail_id
        }
    });
};

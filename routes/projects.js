
/*
 * GET project_detail .
 */

exports.detail = function(req, res){

    var project_id = req.params.id;

    console.log('project_id', project_id);
    console.log('user', req.user);

    res.render('project_detail', { 
        id: project_id, 
        name: 'Project ' + project_id,
        title: 'Alchemy' 
    });
};

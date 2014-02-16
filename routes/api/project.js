
var projects = [
	{id: 1, name: 'Project 1', owners: ['maurizio.branca@gmail.com']},
	{id: 2, name: 'Project 2', owners: ['maurizio.branca@gmail.com']},
	{id: 3, name: 'Project 3', owners: ['maurizio.branca@gmail.com']},
	{id: 4, name: 'Project 4', owners: ['maurizio.branca@gmail.com']},
	{id: 5, name: 'Project 5', owners: ['maurizio.branca@gmail.com']},
	{id: 6, name: 'Project 6', owners: ['maurizio.branca@gmail.com']}
];

/*
 * GET project_detail .
 */

exports.list = function(req, res){

    // var project_id = req.params.id;

    // console.log('project_id', project_id);
    // console.log('user', req.user);

    res.send(projects);
};

exports.detail = function(req, res) {
	var id = req.params.id;
	res.send(projects[0]);
};
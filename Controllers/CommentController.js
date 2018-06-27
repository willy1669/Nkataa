var model = require('../Models/Comment');

exports.addComment = function(req, res){
    var data = {
        name: req.body.name,
        time: Date.now(),
        commentBody: req.body.commentBody,
        user: req.body.user,
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'Comment could not be found'});
        res.json({message: 'Comment was created successfully'});
    });
    

}
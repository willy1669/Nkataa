var model = require('../Models/Post');

exports.addPost = function(req, res){
    var data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user,
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'Post could not be created'})
        res.json({message:'Post was created successfully'})
    });
}

exports.getPost = function(req, res){
    model.find(function(err, Post){
        if(err) res.json({err: err, message: 'Post not found'});
        res.json(posts);
    });
}


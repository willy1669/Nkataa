var model = require('../Models/Post');

exports.addPost = function(req, res){
    var data = {
        time: Date.now(),
        postBody: req.body.postBody,
        user: req.body.user,
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'Post could not be created'});
        res.json({message:'Post was created successfully'});
    });
}

exports.getPost = function(req, res){
    model.find(function(err, Post){
        if(err) res.json({err: err, message: 'Post not found'});
        res.json(posts);
    });
}

exports.deletePost = function(req,res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'The ressource could not be deleted'});
        res.json({message: 'The Post was deleted'});
    });
}

exports.updatePost = function(req, res){
    var id = req.params.id;
    var update = {
        postBody: req.body.postBody
    };
    model.findByIdAndUpdate(id, update, function(err){
        if(err) res.json({err: err, message: 'Update error'});
        res.json({message: update});
    });
}


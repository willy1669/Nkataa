var model = require('../Models/User');

exports.addUser = function(req, res){
    var data = {
        name: req.body.name,
        email: req.body.email,
        paswword: req.body.password
    };
    model.create(data, function(err){
        if(err) res.json({err: err, message: 'the user could not be created'});
        res.json({message: 'the user was created successfilly'});
    });
}

exports.getUser = function(req, res){
    model.find(function(err, users){
        if(err) res.json({err: err, message: 'something went wrong'})
        res.json(users);
    });
}

exports.deleteUser = function(req, res){
    var options = {_id: req.params.id};
    model.remove(options, function(err){
        if(err) res.json({err: err, message: 'the source could not be deleted'});
        res.json({message: 'te resource was deleted'});
    });
}
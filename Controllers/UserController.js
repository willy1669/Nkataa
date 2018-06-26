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
        res.json({message: 'the source was deleted'});
    });
}

exports.getUserByParam = function(req, res){
    var key = req.params.key;
    var value = req.params.value;
    switch(key){
        case 'id':
        model.findbyId(value, '-password', function(err, data){
            if(err)res.json({err: err, message: 'Id not found'});
            res.json({message: data});
        });
        break;
        case 'email':
        model.findOne({email: value}, '-password', function(err, data){
            if(err) res.json({err: err, message: 'Email not found'});
            res.json({message: data});
        });
        break;
        case 'name':
        model.find({name: value}, '-password', function(err, data){
            if(err) res.json({err: err, message:'Name not found'});
            res.json({message: data});
        });
        break;
        default:
        res.json({message: 'Could not find resource'});
        break;
    }
}

exports.updateUser = function(req, res){
    var id = req.params.id;
    var update = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password 
    };
    model.findByAndUpdate(id, update, function(err){
        if(err) res.json({err: err, message: 'Update error'});
        res.json({message: update});
    });
}
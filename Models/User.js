var mongoose = require ('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    posts:[{type:mongoose.Schema.Types.ObjectID, ref: 'post'}]
})

module.exports = mongoose.model('User', UserSchema);
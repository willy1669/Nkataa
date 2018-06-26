var mongoose = require ('mongoose');

var UserSchema = mongoose.Schema({
    name: string,
    email: {type: string, unique: true},
    password: {type:mongoose.Schema.Types.ObjectID, ref: 'post'}
})

module.exports = mongoose.model('User', UserSchema);
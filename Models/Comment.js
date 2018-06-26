var mongoose = require ('mongoose');

var CommentSchema = mongoose.Schema({
    name: String,
    time: Date,
    commentBody: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    post: {type: mongoose.Schema.Types.ObjectId, ref:'Post'} 
});

module.exports = mongoose.Schema('Comment', CommentSchema);
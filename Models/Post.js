var mongoose = require ('mongoose');

var PostSchema = mongoose.Schema({
    time: Date,
    postBody: String,
    user: {type:mongoose.Schema.Types.ObjecId, ref: 'User'},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
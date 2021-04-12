const mongoose = require('./db')
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: String,
    commentText: String,
    confession: { type: Schema.Types.ObjectId, ref: 'Confession' },
    responseBoard: [{ type: Schema.Types.ObjectId, ref: 'Response' }]
})

module.exports = mongoose.model('Comment', commentSchema)
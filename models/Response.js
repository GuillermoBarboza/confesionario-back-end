const mongoose = require('./db')
const Schema = mongoose.Schema;

const responseSchema = new Schema({
    author: String,
    response: String,
    comment: { type: Schema.Types.ObjectId, ref: 'Comment' }
})

module.exports = mongoose.model('Response', responseSchema)
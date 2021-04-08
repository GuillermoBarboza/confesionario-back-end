const mongoose = require('./db')
const Schema = mongoose.Schema;

const confessionSchema = new Schema({
    name: String,
    confessionTitle: String,
    confessionText: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Confession', confessionSchema)
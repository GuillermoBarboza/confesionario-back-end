const mongoose = require('./db')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    confessions: [{ type: Schema.Types.ObjectId, ref: "Confession"}],
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment"}],
    responses: [{ type: Schema.Types.ObjectId, ref: "Response"}]
})

module.exports = mongoose.model('User', userSchema)
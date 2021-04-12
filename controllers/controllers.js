const Confession = require("../models/Confession");
const Comment = require("../models/Comment");
const Response = require("../models/Response");
const User = require("../models/User");

module.exports = {
  getAllConfession: async (req, res) => {
    const confessions = await Confession.find();
    
    res.json(confessions);
  },

  getConfession: async (req, res) => {

    
    const confession = await Confession.findById({
      _id: req.params.id,
    }).populate("comments");
    res.json(confession);
  },

  getConfessionComments: async (req, res) => {
    const confessionComments = await Comment.find({
        confession: req.params.id,
    }).populate("responseBoard");

    res.json(confessionComments);
  },

  postConfession: async (req, res) => {
    const confession = await new Confession({
      name: req.body.name,
      confessionTitle: req.body.confessionTitle,
      confessionText: req.body.confessionText,
    });

    await confession.save();

    res.json('https://pochinuy.vercel.app/confesiones.html');
  },

  postComment: async (req, res) => {
    const comment = await new Comment({
      author: req.body.author,
      commentText: req.body.commentText,
    });

    await comment.save();

    await Confession.findByIdAndUpdate(
      { _id: req.body.confessionId },
      { $push: { comments: comment } }
    );

    res.json("Comment Submitted");
  },

  postResponse: async (req, res) => {
    const response = await new Response({
      name: req.body.name,
      comment: req.body.commentId,
      response: req.body.response,
    });
    await response.save();

    await Comment.findByIdAndUpdate(
      { _id: req.body.commentId },
      { $push: { responseBoard: response } }
    );

    res.json("Response Submitted");
  },
};

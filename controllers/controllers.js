const Confession = require("../models/Confession");
const Comment = require("../models/Comment");
const Response = require("../models/Response");
const User = require("../models/User");
const { response } = require("express");

module.exports = {
  getAllConfession: async (req, res) => {
    const confessions = await Confession.find().limit(35);

    res.json(confessions);
  },

  getConfession: async (req, res) => {
    const confession = await Confession.findById({
      _id: req.query.id,
    }).populate("comments");

    res.json(confession);
  },

  getConfessionComments: async (req, res) => {
    const confessionComments = await Comment.find({
        confession: req.query.id,
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

    res.json("Confession Submitted");
  },

  postComment: async (req, res) => {
    const comment = await new Comment({
      name: req.body.name,
      commentTitle: req.body.commentTitle,
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

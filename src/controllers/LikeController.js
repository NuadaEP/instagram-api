const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    return res.json(post);
  }
};

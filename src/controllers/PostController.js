const Post = require("../models/Post");

module.exports = {
  async index(req, res) {},

  async create(req, res) {
    return res.json(req.body);
  }
};

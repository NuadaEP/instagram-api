const express = require("express");

const routes = new express.Router();

/**
 * Require the controllers
 */
const PostController = require("./controllers/PostController");

routes.get("/", (req, res) => {
  return res.send("To have access of our API access base_url/api/method");
});

routes.get("/", (req, res) => {
  return res.send("To have access of our API access /method");
});

routes.post("/api/posts/create", PostController.create);

module.exports = routes;

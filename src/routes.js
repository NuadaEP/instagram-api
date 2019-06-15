const express = require("express");

/**
 * Require meddlewares
 */
const multer = require("multer");
const uploadConfig = require("./config/upload");
const upload = multer(uploadConfig);

/**
 * Require the controllers
 */
const PostController = require("./controllers/PostController");

const routes = new express.Router();
routes.get("/", (req, res) => {
  return res.send("To have access of our API access base_url/api/method");
});

routes.get("/api", (req, res) => {
  return res.send("To have access of our API access /method");
});

routes.get("/api/posts", PostController.index);
routes.post("/api/posts/create", upload.single("image"), PostController.create);

module.exports = routes;

const express = require("express");

const routes = new express.Router();

routes.get("/", (req, res) => {
  return res.send("To have access of our API access base_url/api/method");
});

module.exports = routes;

const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");

// User routes
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

// Post routes
routes.get("/posts", PostController.index);
routes.get("/posts/:id", PostController.show);
routes.post("/posts", PostController.create);
routes.put("/posts/:id", PostController.update);
routes.delete("/posts/:id", PostController.delete);

module.exports = routes;

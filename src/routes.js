const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/UserController");
const PostController = require("../controllers/PostController");
const AddressController = require("../controllers/AddressController");

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

// Address routes
routes.get("/addresses", AddressController.index);
routes.get("/addresses/:id/users", AddressController.showUserAddresses);
routes.get("/users/:id/addresses", AddressController.showAddressesUser);
routes.get("/addresses/:id", AddressController.showAddress);
routes.post("/addresses", AddressController.create);
routes.put("/addresses/:id", AddressController.update);
routes.delete("/addresses/:id", AddressController.delete);
routes.post("/addresses/:id/users", AddressController.addUser);
routes.delete("/addresses/:id/users", AddressController.removeUser);

module.exports = routes;

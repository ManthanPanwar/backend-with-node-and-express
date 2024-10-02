const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/add-user", userController.postUser);

router.get("/", userController.getUsers);

router.get("/:id", userController.getUser);

router.post("/delete-user/:id", userController.deleteUser);

router.post("/edit-user/:id", userController.editUser);
module.exports = router;

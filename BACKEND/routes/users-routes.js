const express = require("express");
const controller = require("../controllers/users-controller");

const router = express.Router();

router.get("/users", controller.getUsers);
router.post("/users/add-user", controller.addUser);
router.delete("/users/delete-user/:id", controller.deleteUser);
router.delete("/users/edit-user/:id", controller.editUser);

module.exports = router;

const express = require("express");
const { getAlluser, createUser, getOneuser, deleteUser, updateUser } = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAlluser );
router.get("/:id", getOneuser);
router.post("/", createUser);
router.patch("/:id", updateUser);

module.exports = router;
const express = require("express");
const router = express.Router();

const { login, signup} = require("../controller/Auth");
const {auth, isUser, isAdmin} = require("../middleware/Auth");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
const express = require('express');
const router = express.Router();
const upload = require("../middlewares/upload.js");
const { createUser } = require('../controllers/user.controller.js');

router.post('/',upload.single('image'), createUser);

module.exports = router;
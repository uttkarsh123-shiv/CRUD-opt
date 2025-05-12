const express = require('express');
const router = express.Router();

router.post('/',upload.single('image'), createUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require("../controllers/user")

router.get('/', userController.listUser);
router.post('/',userController.newUser);
router.get('/:id', userController.getUser);

module.exports = router;

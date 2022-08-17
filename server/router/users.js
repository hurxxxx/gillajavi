const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get('/', userController.listUser);
router.post('/',userController.newUser);
router.get('/:id', userController.getUser);
router.get('/:id/update',userController.updateUser)


module.exports = router;

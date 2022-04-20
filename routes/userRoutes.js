const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const userInMiddleware = require('../middlewares/userMiddleware');
const tokenVerify = require('../middlewares/tokenVerifyMiddleware');

router.get('/', tokenVerify, userController.getAllUsers);
router.get('/:id', tokenVerify, userController.getUserById);
router.post('/', userInMiddleware, userController.create);
router.delete('/me', tokenVerify, userController.destroy);

module.exports = router;

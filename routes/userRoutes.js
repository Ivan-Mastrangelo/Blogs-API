const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const userInMiddleware = require('../middlewares/userMiddleware');
const tokenVerify = require('../middlewares/tokenVerifyMiddleware');

router.get('/', tokenVerify, userController.getAllUsers);
router.post('/', userInMiddleware, userController.create);

module.exports = router;

const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const userInMiddleware = require('../middlewares/usersMiddlewares');

router.post('/', userInMiddleware, userController.create);

module.exports = router;

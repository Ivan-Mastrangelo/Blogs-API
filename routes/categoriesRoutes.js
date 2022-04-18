const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const loginMiddleware = require('../middlewares/loginMiddleware');

router.post('/', loginMiddleware, categoriesController.create);

module.exports = router;
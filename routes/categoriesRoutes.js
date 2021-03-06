const express = require('express');

const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const tokenVerify = require('../middlewares/tokenVerifyMiddleware');

router.post('/', tokenVerify, categoriesController.create);
router.get('/', tokenVerify, categoriesController.getAllCategories);

module.exports = router;
const express = require('express');

const router = express.Router();
const blogPostController = require('../controllers/blogPostController');
const blogPostMiddleware = require('../middlewares/blogPostMiddleware');
const tokenVerify = require('../middlewares/tokenVerifyMiddleware');

router.post('/', tokenVerify, blogPostMiddleware, blogPostController.create);
router.get('/', tokenVerify, blogPostController.getAllPosts);

module.exports = router;
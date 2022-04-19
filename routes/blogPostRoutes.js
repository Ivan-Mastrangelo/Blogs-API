const express = require('express');

const router = express.Router();
const blogPostController = require('../controllers/blogPostController');
const blogPostMiddleware = require('../middlewares/blogPostMiddleware');
const tokenVerify = require('../middlewares/tokenVerifyMiddleware');
// const updatePostMiddleware = require('../middlewares/blogPostMiddleware');

router.post('/', tokenVerify, blogPostMiddleware, blogPostController.create);
router.get('/', tokenVerify, blogPostController.getAllPosts);
router.get('/:id', tokenVerify, blogPostController.getPostById);
// router.put('/:id', tokenVerify, updatePostMiddleware, blogPostController.update);

module.exports = router;
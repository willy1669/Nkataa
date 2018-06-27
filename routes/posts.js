var express = require('express');
var router = express.Router();
var postController = require('../Controllers/PostController');

/* GET Users listing */
router.post('/create', postController.addPost);

router.get('/', postController.getPost);

router.get('/', postController.deletePost);

router.post('/', postController.updatePost);


module.exports = router;
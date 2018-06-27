var express = require('express');
var router = express.Router();
var commentController = require('../Controller/CommentController');

/*GET Users Listing. */
router.post('/create', commentController.addComment);

router.get('/', commentController.getComment);

router.get('/', commentController.deleteComment);

router.post('/', commentController.updateComment);

module.exports = router;
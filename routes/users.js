var express = require('express');
var router = express.Router();
var userController = require('../Controllers/UserController');

/* GET users listing. */
router.post('/create', userController.addUser);

router.get('/', userController.getUser);

router.get('/delete/:id', userController.deleteUser);

module.exports = router;
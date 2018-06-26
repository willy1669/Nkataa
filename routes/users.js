var express = require('express');
var router = express.Router();

/* GET users listing. */
Router.post('/create', userController.addUser);

Router.get('/', userController.getUser);

Router.get('/delete/:id', userController.deleteUser);

module.exports = router;

var express = require('express');
var router = express.Router();

//引入自定义的controller
const indexController = require('../controllers/index');

//定义登录路由，post请求
router.post('/login', indexController.login);

module.exports = router;

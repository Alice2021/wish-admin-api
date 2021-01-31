var express = require('express');
var router = express.Router();
//引入自定义的controller

const WishController = require('../controllers/wish');

router.get ('/', WishController.list);       //定义单条许愿路由
router.get('/:id', WishController.info);    //定义单条许愿路由
router.post('/', WishController.add);       //定义添加许愿路由
router.put('/', WishController.update);     //定义修改许愿路由
router.delete('/', WishController.remove);  //定义删除许愿路由
module.exports = router;

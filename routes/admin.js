var express = require('express');
var router = express.Router();
//引入自定义的controller

const adminController = require('../controllers/admin');
router.get('/', adminController.list);       //定义管理员列表路由
router.get('/:id', adminController.info);    //定义单条管理员信息路由
router.post('/', adminController.add);       //定义添加管理员路由
router.put('/', adminController.update);     //定义修改修管理员路由
router.delete('/', adminController.remove);    //定义删除管理路由
module.exports = router;
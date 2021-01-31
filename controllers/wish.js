const Common = require('./common');                 //引入公共方法
const WishModel = require('../model/wish');         //引入wish表的model
const Constant = require('../constant/constant');   //引入常量
const dateFormat = require('dateformat');           //引入dateFormat包
//配置对象
let exportObj = {
    list,
    info,
    add,
    update,
    remove
};
module.exports = exportObj;
function list(req, res) {
    //获取许愿列表逻辑
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);  //定义一个返回对象
    //定义一个async任务
    let tasks = {
        //校验参数方法
        checkParams: (cb) => {
            //调用公共方法中的检验参数方法，如果成功，则继续后面的操作
            //如果失败，则传递参数到async任务当中
            Common.checkParams (req.query, ['page','rows'], cb);
        },
        //查询方法，依赖校验参数方法
        query: ['checkParams', (results, cb) => {
            //根据前端提交的参数计算SQL语句中需要的offset，即从多少条开始查询
            let offset = req.query.rows * (req.query.page - 1) || 0;
            //根据前端提交的参数计算SQL语句中需要的limit，即查询多少条
            let limit = parseInt(req.query.rows) || 20;
            let whereCondition = {};        //设定一个查询条件对象
            //如果查询姓名存在，则查询对象增加姓名
            if (req.query.name){
                whereCondition.name = req.query.name;
            }
            //通过offset和limit使用wish的model去数据库查询
            //并安装创建时间排序
            WishModel
                .findAndCountAll ({
                    where: whereCondition,
                    offset: offset,
                    limit: limit,
                    order: [['created_at', 'DESC']],
                })
                .then (function (result) {
                    //查询处理结果
                    let list = [];      //定义一个空数组，用来存放最终结果
                    //遍历SQL查询出来的结果，处理后装入list
                    result.rows.forEach ((v, i) => {
                        let obj = {
                            id: v.id,
                            name: v.name,
                            content: v.content,
                            createAt: dateFormat (v.createAt, 'yyyy-mm-dd HH:MM:ss')
                        };
                        list.push (obj);
                    });
                    //给返回的结果赋值，包括列表和总条数
                    resObj.data = {
                        list,
                        count: result.count
                    };
                    cb(null);
                })
                .catch (function (err){
                    //错误处理
                    console.log (err);
                    cb (Constant.DEFAULT_ERROR);
                });
            }]
    };
    Common.autoFn(tasks, res, resObj)       //执行公共方法中的autoFn方法，返回数据
}
function info(req, res) {
    //获取单条许愿逻辑
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);  //定义一个返回对象
    //定义一个async任务
    let tasks = {
        //校验参数方法
        checkParams: (cb) => {
            //调用公共方法中的检验参数方法，如果成功，则继续后面的操作
            //如果失败，则传递参数到async任务当中
            Common.checkParams( (req.params, ['id'], cb));
        },
        //查询方法，依赖校验参数方法
        query: ['checkParams', (results, cb) => {
            //使用wish中的model方法查询
            WishModel
                .findByPk (req.params.id)
                .then (function (result) {
                    //查询处理结果
                    //如果查询到结果
                    if(result){
                        //将查询到的结果给返回对象赋值
                        resObj.data = {
                            id: result.id,
                            name: result.name,
                            content: result.content,
                            createAt: dateFormat (result.createAt, 'yyyy-mm-dd HH:MM:ss')
                        };
                        cb(null)
                    }else{
                        //查询失败，传递错误信息到async最终方法当中
                        cb(Constant.WISH_NOT_EXIST);
                    }
                })
                .catch (function (err){
                    //错误处理
                    console.log (err);
                    cb (Constant.DEFAULT_ERROR);
                });
        }]
    };
    Common.autoFn(tasks, res, resObj)
}
function add(req, res) {
    //添加许愿逻辑
    //定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    //定义一个async任务
    let tasks = {
        //校验参数方法
        checkParams: (cb) => {
            //调用公共方法中的检验参数方法，如果成功，则继续后面的操作
            //如果失败，则传递参数到async任务当中
            Common.checkParams(req.body, ['name', 'content'], cb);
        },
        //添加方法，依赖校验参数方法
        add: ['checkParams', (results, cb) => {
            //使用wish中的model方法查询
            WishModel
                .create ({
                name: req.body.name,
                content: req.body.content
                })
                .then (function (result) {
                    //插入处理结果
                    cb(null)
                })
                .catch (function (err){
                    //错误处理
                    console.log (err);
                    cb (Constant.DEFAULT_ERROR);
                });
        }]
    };
    Common.autoFn(tasks, res, resObj)
}
function update(req, res) {
    //修改许愿逻辑
    //定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    //定义一个async任务
    let tasks = {
        //校验参数方法
        checkParams: (cb) => {
            //调用公共方法中的检验参数方法，如果成功，则继续后面的操作
            //如果失败，则传递参数到async任务当中
            Common.checkParams(req.body, ['id', 'name', 'content'], cb);
        },
        //更新方法，依赖校验参数方法
        update: cb => {
            //使用wish中的model方法查询
            WishModel
                .update ({
                    name: req.body.name,
                    content: req.body.content
                }, {
                    where: {
                        id: req.body.id
                    }
                })
                .then (function (result) {
                    //更新处理结果
                    if(result[0]){
                        //如果更新成功
                        cb(null)
                    }else{
                        //如果失败，则传递错误信息到async的最终方法中
                        cb(Constant.WISH_NOT_EXSIT);
                    }
                })
                .catch (function (err){
                    //错误处理
                    console.log (err);
                    cb (Constant.DEFAULT_ERROR);
                });
        }
    };
    Common.autoFn(tasks, res, resObj)
}
function remove(req, res) {
    //删除许愿逻辑
    //定义一个返回对象
    const resObj = Common.clone(Constant.DEFAULT_SUCCESS);
    //定义一个async任务
    let tasks = {
        //校验参数方法
        checkParams: cb => {
            //调用公共方法中的检验参数方法，如果成功，则继续后面的操作
            //如果失败，则传递参数到async任务当中
            Common.checkParams(req.body, ['id'], cb);
        },
        //删除方法，依赖校验参数方法
        remove: cb => {
            //使用wish的model中的方法更新
            WishModel
                .destroy ({
                    where: {
                        id: req.body.id
                    }
                })
                .then (function (result) {
                    //删除处理结果
                    if(result){
                        //如果删除成功
                        //继续后续操作
                        cb(null)
                    }else{
                        //如果删除失败，则传递错误信息到async的最终方法中
                        cb(Constant.WISH_NOT_EXSIT);
                    }
                })
                .catch (function (err){
                    //错误处理
                    console.log (err);
                    cb (Constant.DEFAULT_ERROR);
                });
        }
    };
    Common.autoFn(tasks, res, resObj)
}
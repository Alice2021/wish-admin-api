const Sequelize = require('sequelize'); //引入sequelize模块
const db = require('../db');    //引入数据库实例
// 定义model
const Wish = db.define('Wish', {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true
    },
    name: {type: Sequelize.STRING(20), allowNull: false},
    content: {type: Sequelize.STRING, allowNull: false}}, {underscored: true, tableName: 'wish',
});
module.exports = Wish;
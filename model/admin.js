const Sequelize = require('sequelize'); //引入sequelize模块
const db = require('../db');    //引入数据库实例
// 定义model
const Admin = db.define('Admin', {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true
    },
    username: {type: Sequelize.STRING(20), allowNull: false},
    password: {type: Sequelize.STRING(36), allowNull: false},
    name: {type: Sequelize.INTEGER, allowNull: false},
    role: {type: Sequelize.STRING(20), allowNull: false},
    lastLoginAt: {type: Sequelize.DATE}
}, {underscored: true, tableName: 'admin',
});
module.exports = Admin;
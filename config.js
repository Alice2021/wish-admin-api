//默认dev配置
const config = {
    DEBUG: true,            //是否调试模式
    MYSQL: {
        host: 'localhost',
        database: 'wish',
        username: 'root',
        password: 'root'
    }
};
if (process.env.NODE_ENV === 'production') {
    //生产环境下SQL的配置
    config.MYSQL = {
        host: 'aaa.mysql.rds.aliyuncs.com',
        database: 'aaa',
        username: 'aaa',
        password: 'aaa'
    };
}
module.exports = config;
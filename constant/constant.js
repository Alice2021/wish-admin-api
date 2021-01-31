const obj = {
    //默认请求成功
    DEFAULT_SUCCESS: {
        code: 10000,
        msg: ''
    },
    //默认请求失败
    DEFAULT_ERROR: {
        code: 188,
        msg: '系统错误'
    },
    //缺少必要参数
    LACK: {
        code: 199,
        msg: '缺少必要参数'
    },
    //Token验证失败
    TOKEN_ERROR: {
        code: 401,
        msg: 'token验证失败'
    },
    //用户名或密码错误
    LOGIN_ERROR: {
        code: 101,
        msg: '用户名或密码错误'
    },
    WISH_NOT_EXSIT: {
        code: 102,
        msg: '许愿信息不存在'
    },
    //管理员信息不存在
    ADMIN_NOT_EXIST: {
        code: 102,
        msg: '管理员信息不存在'
    }
};
module.exports = obj;
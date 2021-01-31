const Token = require('../../controllers/token');
const Constant = require('../../constant/constant');
//配置对象
const exportObj = {
    verifyToken
};
module.exports = exportObj;
function verifyToken (req, res, next) { //验证token中间件
    //如果请求路径是/login，即跳过，继续下一步
    if(res.path === '/login') return next();
    let token = req.headers.token;  //从请求头获取参数token
    let tokenVerifyObj = Token.decrypt(token);
    if(tokenVerifyObj.token){
        next();                         //如果验证通过，则继续下一步
    }else{
        res.json(Constant.TOKEN_ERROR); //如果验证不通过，则返回错误json
    }
}


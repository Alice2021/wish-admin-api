const jwt = require('jsonwebtoken');    //引入jsonwebtoken包
const tokenKey = 'XfZEpWEn?ARD7rHBN';   //设置一个秘钥，用来加密和解密token
//定义一个对象
const Token = {
    /**
     * token加密方法
     */
    encrypt: function(data, time) {
        return jwt.sign(data, tokenKey, {expiresIn: time})
    },
    /**
     * token解密方法
     */
    decrypt: function(token){
        try {
            let data = jwt.verify (token, tokenKey);
            return {
                token: true,
                data: data
            };
        } catch (e) {
            return{
                token: false,
                data: e
            }
        }
    }
};
module.exports = Token;


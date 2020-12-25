const jwt = require('jsonwebtoken')
const { TOKEN } = require('../config/config')
const statusCode = require('./status-code')

module.exports = {
  /**
   * 生成token
   * @param {*} params 用户信息
   */
  create_token(params) {
    return jwt.sign(params, TOKEN.TOKEN_ENCODE_STR, { expiresIn: TOKEN.TOKEN_EXPIRES })
  },

  /**
   * 解析token
   * @param {*} token 
   */
  async decode_token(token) {
    // 验证 Token
    return jwt.verify(token, TOKEN.TOKEN_ENCODE_STR)
  },

  /**
   * 判断token是否可用
   * @param {*} ctx 
   * @param {*} next 
   */
  async check_token(ctx, next) {
    try {
      const token = ctx.header.token  // 获取jwt
      if (token) {
        let payload
        try {
          payload = await this.decode_token(token)  // 解密payload，获取用户名和ID
          ctx.user = {
            name: payload.name,
            id: payload.id
          }
        } catch (err) {
          err.status = 401;
          ctx.body = statusCode.ERROR_401('Token verify fail');
        }
      }
      await next()
    } catch (err) {
      if (err.status === 401) {
        ctx.status = 401;
        ctx.body = statusCode.ERROR_401('Unauthorized，请求需要用户的身份认证！');
      } else {
        ctx.body = statusCode.ERROR_404({ err });
      }
    }
  }

}
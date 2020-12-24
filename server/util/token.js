/**
 * jwt 用法 demo 
 */
const jwt = require('jsonwebtoken')
const { TOKEN } = require('../config/config')

export default {
  /**
   * 生成token
   * @param {*} params 用户信息
   */
  create_token(params) {
    return jwt.sign(params, TOKEN.TOKEN_ENCODE_STR, { expiresIn: TOKEN.TOKEN_EXPIRES })
  },

  /**
   * 验证token
   * @param {*} token 
   */
  async check_token(token) {
    // 验证 Token
    return await jwt.verify(token, TOKEN.TOKEN_ENCODE_STR)
  }

}
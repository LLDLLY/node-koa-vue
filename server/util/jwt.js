const jwt = require('jsonwebtoken')
const fs = require('fs')

// Token 数据
const payload = {
  name: 'yaoli',
  admin: true
}

/**
 * HS256
 * 用 HS256 算法生成与验证 JWT
 */

// 密钥
const secret = 'KSJINAINAINUWOWNANMJ';

// 签发 Token
const token = jwt.sign(payload, secret, { expiresIn: '1day' })

// 输出签发的 Token
console.log('HS256 算法：', token)

// 验证 Token
jwt.verify(token, secret, (error, decoded) => {
  if (error) {
    console.log(error.message)
    return
  }
  console.log(decoded)
})

console.log('\n')

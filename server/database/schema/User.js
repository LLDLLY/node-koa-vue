const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

let ObjectId = Schema.Types.ObjectId;
const SALT_WORK_FACTOR = 10;

// 创建UserSchema
const userSchema = new Schema({
    userId: {type: ObjectId},
    userName: {unique: true, type: String},
    password: {type: String},
    createAt: {type: Date, default: Date.now()},
    lastLoginAt: {type: Date, default: Date.now()}
  })

// 存数据库先加密
userSchema.pre('save', function (next) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(this.password,salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      })
    })
  })
  // 密码比对
  userSchema.methods = {
    comparePassword: (_password, password) => {
      return new Promise((resolve, reject) => {
        bcrypt.compare(_password, password, (err, isMatch) => {
          err ? reject(err) : resolve(isMatch);
        })
      })
    }
  }

mongoose.model('User',userSchema)
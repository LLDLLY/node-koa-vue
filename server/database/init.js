/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const { DB_NAME, DB_HOST, DB_PORT, DB_USER_NAME, DB_USER_PASSWORD } = require('../config/config').DATABASE;
const db = `mongodb://${DB_USER_NAME}:${DB_USER_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_NAME}`;
const glob = require('glob');
const { resolve } = require('path');

exports.initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require);
}

exports.connect = () => {
  // 连接数据库
  mongoose.connect(db, { useNewUrlParser: true });

  let maxConnectTimes = 0;
  //监听事件
  mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
    if (maxConnectTimes <= 3) {
      maxConnectTimes++;
      mongoose.connect(db);
      return
    }
    throw new Error('db error');
  })

  mongoose.connection.on('error', (err) => {
    if (maxConnectTimes <= 3) {
      maxConnectTimes++;
      mongoose.connect(db);
      return
    }
    throw new Error('db error:' + err);
  })

  mongoose.connection.on('connected', () => {
    console.log('mongo connect success');
  })
}

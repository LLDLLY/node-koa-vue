module.exports = {
    environment: 'dev',
    // 需要自己搭建一下mongodb数据库，填上自己数据库的参数
    database: {
        dbName: 'test',
        host: '*.*.*.*',
        port: 0000,
        user: 'admin',
        password: '123456',
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    }
}


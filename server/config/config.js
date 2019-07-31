module.exports = {
    environment: 'dev',
    database: {
        dbName: 'vue-mall',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password'
    },
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    }
}
module.exports = {
    ENV: 'dev',
    DATABASE: {
        DB_NAME: '****',
        DB_HOST: '0.0.0.0',
        DB_PORT: 27017,
        DB_USER_NAME: '**',
        DB_USER_PASSWORD: '*****',
    },
    SECURITY: {
        SECRET_KEY: "secretKey",
        // 过期时间 1小时
        EXPIRESIN: 60 * 60,
    },
    TOKEN: {
        TOKEN_ENCODE_STR: 'ksdIBNKJNKJNjksnfksjdnljkjKJHBJsdsd',
        TOKEN_EXPIRES: '1day',
        TOKEN_NAME: 'DT-KKHHB-OOJ'
    }
}


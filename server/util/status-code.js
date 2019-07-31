const statusCode = {
    ERROR_401: (msg) => {
        return {
            code: 401,
            msg: msg || '授权失败'
        }
    },

    ERROR_403: (msg) => {
        return {
            code: 403,
            msg:msg ||  '禁止访问'
        }
    },

    ERROR_404: (msg) => {
        return {
            code: 404,
            msg
        }
    },

    ERROR_412: (msg) => {
        return {
            code: 412,
            msg: msg || '已存在'
        }
    },

    SUCCESS_200: (msg, data) => {
        return {
            code: 200,
            msg,
            data,
        }
    }
}

module.exports = statusCode
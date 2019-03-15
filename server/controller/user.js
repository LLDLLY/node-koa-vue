


const mongoose = require('mongoose')
class UserController {
    /**
     * 创建用户
     * @param ctx
     * @returns {Promise<void>}
     */
    static async create(ctx) {
        const user = ctx.request.body;
        // 生成mongooes model
        const User = mongoose.model('User');

        if(user.username&&user.password){
            // 查询账号是否存在
            const existUser = await User.find({'userName':user.username})
            
            if(existUser.length > 0){
                ctx.body={
                   code:403,
                   mess:'账户已存在，可直接登录！'
                }
            }
        }
        // TODO
    
        // 2.判断数据合法性，判断账号是否存在
        // 3.存入数据库
        // 4.接口response

    }

    /**
     * 查询用户信息
     * @param ctx
     * @returns {Promise<void>}
     */
    static async getUserInfo(ctx) {
        // 获取jwt

    }

    /**
     * 删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async delete(ctx) {

    }

    /**
     * 登录
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async login(ctx) {

    }

    /**
     * 获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUserList(ctx) {

    }
}

module.exports = UserController
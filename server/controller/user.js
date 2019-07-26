const mongoose = require('mongoose')

class UserController {

    /**
     * 创建用户
     */
    static async create(ctx) {
        const requestParams = ctx.request.body;
        // 生成mongooes model
        const UserMongo = mongoose.model('User');

        UserController.verifyUser(requestParams);

        if(requestParams.username&&requestParams.password){
         
            // 查询账号是否存在
            const existUser = await UserMongo.find({'userName': requestParams.username});
            if(existUser.length > 0){
                console.log('存在');
                ctx.body = {
                   code: 403,
                   mess: '账户已存在，可直接登录！'
                }
            }else{
                console.log('不存在')
                let newUser = new UserMongo(requestParams);

                newUser.save().then(() => {
                    ctx.body = {
                    code: 200,
                    message: '注册成功'
                    }
                }).catch(e => {
                    ctx.body = {
                    code: 500,
                    message: e  
                    }
                }) 
            }
        }
        // TODO
    
        // 2.判断数据合法性，判断账号是否存在
        // 3.存入数据库
        // 4.接口response

    }

    /**
     * 验证用户参数
     */
    static verifyUser(params){
        if(!params.username||!params.password){
            ctx.body = {
            code: 500,
            message: '用户名或者密码不能为空！'
            }
            return;
        }
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
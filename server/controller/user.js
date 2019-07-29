const mongoose = require('mongoose')

class UserController {
    /**
     * 验证用户参数是否为空
     */
    static verifyUser(params) {
        if (!params.username || !params.password) {
            ctx.body = {
                message: '用户名或者密码不能为空！',
                success: false
            }
            return;
        }
    }

    /**
     * 注册用户
     */
    static async create(ctx) {
        const requestParams = ctx.request.body;
        const { username, password } = ctx.request.body;
        // 生成mongooes model
        const UserMongo = mongoose.model('User');

        // 验证
        UserController.verifyUser(requestParams);

        if (username && password) {

            // 查询账号是否存在
            const existUser = await UserMongo.findOne({ 'username': requestParams.username });

            // status:'0' 账户已存在 status:'1' 注册成功
            if (!!existUser) {
                console.log('存在');
                ctx.body = { success: false, mess: '账户已存在，可直接登录！', status: '0' };
            } else {
                console.log('不存在')
                let newUser = new UserMongo(requestParams);

                const res = await newUser.save();

                if (!res.errors) {
                    ctx.body = { success: true, mess: '注册成功!', status: '1' }
                } else {
                    ctx.body = result;
                }

                // 下面代码执行时，会直接先跳过save的回掉处理，路由返回404，再执行err回掉，原因暂不清楚
                // await newUser.save(err => {
                //     if (err) {
                //         ctx.body = result;
                //     } else {
                //         ctx.body = {success: true, message: '注册成功'}
                //     }
                // })
            }
        }
    }

    /**
     * 登录
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async login(ctx) {
        const { username, password } = ctx.request.body;
        // 验证
        UserController.verifyUser({ username, password });
        if (username && password) {
            const UserMongo = mongoose.model('User');
            // 查询账号是否存在
            const existUser = await UserMongo.findOne({ 'username': username });

            if (!existUser) {
                console.log('不存在');
                ctx.body = { code: 200, success: false, mess: "账号不存在，请确认账号！" };
            } else {
                console.log('存在');
                const userData = new UserMongo();
                let data = await userData.comparePassword(password, existUser.password);

                if(data) ctx.body= {code:200, success: true, message: '登入成功!'};
                if(!data) ctx.body= {code:200, success: false, message: '密码错误！'};
            }
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
     * 获取用户列表
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getUserList(ctx) {

    }
}

module.exports = UserController
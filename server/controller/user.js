const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { create_token, decode_token } = require('../util/token')

class UserController {
    constructor() { }
    loginUserInfo = null; // 保存登录用户的信息

    /**
     * 验证用户参数是否为空
     */
    static verifyUser(params) {
        if (!params.username || !params.password) {
            ctx.body = {
                code: 403,
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
        const { username, password } = requestParams;
        // 生成mongooes model
        const UserMongo = mongoose.model('User');

        // 验证
        UserController.verifyUser(requestParams);

        if (username && password) {

            // 查询账号是否存在
            const existUser = await UserMongo.findOne({ 'username': username });

            // status:'0' 账户已存在 
            // status:'1' 注册成功
            if (!!existUser) {
                console.log('存在');
                ctx.body = { code: 200, success: false, mess: '账户已存在，请直接登录！', status: '0' };
            } else {
                console.log('不存在')
                let newUser = new UserMongo(requestParams);

                // 存入数据库
                const res = await newUser.save();

                if (!res.errors) {
                    ctx.body = { code: 200, success: true, mess: '注册成功!', status: '1' }
                } else {
                    ctx.body = { code: 200, success: false, mess: '注册失败!', status: '0', error: res.errors };
                }
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
            const userData = new UserMongo()
            // 查询账号是否存在
            const existUser = await UserMongo.findOne({ 'username': username });

            if (!existUser) {
                console.log('不存在');
                ctx.body = { code: 200, success: false, mess: "账号不存在，请确认账号！" };
                return
            }

            console.log('存在');
            // 密码是否正确
            let data = await userData.comparePassword(password, existUser.password);
            if (!data) {
                console.log('comparePassword:', data)
                ctx.body = { code: 200, success: false, mess: '密码错误,请检查账号和密码是否正确！' };
                return
            }

            if (existUser.token) {
                try {
                    const decodeRes = await decode_token(existUser.token + "as");
                    console.log('decodeRes:', decodeRes)
                    UserController.loginUserInfo = decodeRes;
                    if (!!decodeRes) ctx.body = { code: 200, success: false, mess: '请勿重复登录!' };
                } catch (err) {
                    // token过期，重新签发token
                    const result = await UserController.setTokenFn(ctx, existUser);
                    console.log('login result:', result)
                    ctx.body = {
                        code: 200,
                        success: true,
                        result: result,
                        mess: result.mess
                    }
                }
            } else {
                const result = await UserController.setTokenFn(ctx, existUser);
                console.log('login result:', result)
                ctx.body = {
                    code: 200,
                    success: true,
                    result: result,
                    mess: result.mess
                }
            }

        }
    }

    /**
     * 用户签发token逻辑
     */
    static setTokenFn(ctx, existUser) {
        const { username } = ctx.request.body;
        // 对比密码是否正确
        const UserMongo = mongoose.model('User');

        return new Promise(async (resolve) => {
            try {
                // jwt签发token
                const token = create_token({ username: username, _id: existUser._id })
                console.log('token', token)

                UserMongo.updateOne({ '_id': existUser._id }, { 'token': token, 'updateTime': new Date() }, (err, res) => {
                    if (err) {
                        resolve({ status: 0, mess: 'token存数据库失败，请联系管理员！' });
                    } else {
                        resolve({ status: 1, token: token, mess: '登入成功!', });
                    }
                });
            } catch (err) {
                resolve({ status: 0, mess: err })
                throw (err)
            }
        })

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
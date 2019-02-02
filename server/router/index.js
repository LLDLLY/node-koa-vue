const Router = require('koa-router')
const UserController = require('../controller/user')
const HomeController = require('../controller/home')
const GoodsController = require('../controller/goods')



const router = new Router({
    prefix: '/api/v1'
})

/**
 * home 页面数据
 */
router.get('/home',HomeController.getHomeInitData)

/**
 * 用户接口
 */
// 用户注册
router.get('/user/register', UserController.create);
// 用户登录
router.post('/user/login', UserController.login);
// 删除用户
router.delete('/user/delete/:id', UserController.delete);
// 获取用户信息
router.get('/user/info', UserController.getUserInfo);
// 获取用户列表
router.get('/user/list', UserController.getUserList);


/**
 * 商品接口
 */
router.get('/goods/getGoodsDetail',GoodsController.getGoodsDetail)

module.exports = router
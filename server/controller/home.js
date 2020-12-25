
const homeData = require('../json/home.json')
class HomeData {
    constructor() { }
    /**home页面初始化数据 数据未走数据库*/
    static async getHomeInitData(ctx) {
        ctx.body = {
            code: 200,
            data: homeData.data,
            success: true
        };
    }
}
module.exports = HomeData
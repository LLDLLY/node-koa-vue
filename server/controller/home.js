
const homeData = require('../json/home.json')
class HomeData {
    constructor() { }
    /**home页面初始化数据 */
    static async getHomeInitData(ctx) {
        const user = ctx.request.body;
        ctx.body ={
            code:200,
            data:homeData.data
        };


    }
}
module.exports = HomeData
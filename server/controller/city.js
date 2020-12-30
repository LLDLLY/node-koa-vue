

const city = require('../json/mongo_json/city.json')
class CityController {
  constructor() { }
  /**home页面初始化数据 数据未走数据库*/
  static async getCityInitData(ctx) {
    ctx.body = {
      code: 200,
      result: city.data,
      success: true
    };
  }
}
module.exports = CityController
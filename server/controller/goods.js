
const mongoose = require('mongoose')

class Goods {
    /**
     * 删除用户
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getGoodsDetail(ctx) {
        let ID = ctx.request.query.id
        // schema model
        const Goods = mongoose.model('Goods')
        const data = await Goods.findOne({ID:ID})
        ctx.body = {
            code: 200,
            data: data
        }
    }
}
module.exports = Goods
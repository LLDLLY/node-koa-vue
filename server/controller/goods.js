
const mongoose = require('mongoose')

class Goods {
    /**
     * 商品详情
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
    /**
     * 商品评论
     */
    static async getCommentsList(ctx) {
      let id  = ctx.request.query.id;
      const Comments = mongoose.model('Comments');
      const data = await Comments.find()
      ctx.body = {
        code: 200,
        data: data
      }
    }

}
module.exports = Goods
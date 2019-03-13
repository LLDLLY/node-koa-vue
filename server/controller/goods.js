
const mongoose = require('mongoose')

class Goods {
    /**
     * 商品详情
     */
    static async getGoodsDetail(ctx) {
        let ID = ctx.request.query.id
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
    /**
     * 商品分类
     */
    static async getCategories(ctx) {
        const Categories = mongoose.model('Categories'); 
        const data = await Categories.find();
        ctx.body = {
          code: 200,
          data: data
        }
    }
    /**
     * 商品分类_子类
     */
    static async getCategoriesChild(ctx) {
      let id = ctx.request.query.id;
      const CategorySub = mongoose.model('CategorySub'); 
      const categorySub = await CategorySub.find({'MALL_CATEGORY_ID':id});
      ctx.body = {
        code: 200,
        data: categorySub
      }
    }
    /**
     * 商品分类_子类_列表
     */
    static async getCategoriesChildList(ctx){
      let params = ctx.request.body;
      let num = 10; // 每页数量
      let startIndex = (params.page - 1) * num
      const Goods = mongoose.model('Goods')
      let res = await Goods.find({SUB_ID: params.id}).skip(startIndex).limit(num)  // 查询限制条件
      ctx.body = {
        code: 200,
        data: res
      }
    }


}
module.exports = Goods
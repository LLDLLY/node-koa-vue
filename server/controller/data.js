
const mongoose = require('mongoose');
const fs = require('fs');
const { resolve } = require('path');

class InsertController {
    /**
     * 插入
     */
    static async insertComments(ctx) {
        fs.readFile(resolve(__dirname, '../json/mongo_json/newcomments.json'), 'utf8', (err, data) => {
            if (err) throw err
            if (!data) return;
            const Comments = mongoose.model('Comments');
            let saveCount = 0;
            JSON.parse(data).map(item => {
                let newComments = new Comments(item);
                newComments.save().then(() => {
                    saveCount++;
                    console.log(saveCount);
                }).catch(err => {
                    throw err;
                })
            })
            console.log("导入评论成功");
            ctx.body = { code: 200 }
        })
    }

    static async insertAllGoodsInfo(ctx, next) {
        fs.readFile(resolve(__dirname, '../json/mongo_json/newGoods.json'), 'utf8', (err, data) => {
            if (err) throw err
            data = JSON.parse(data)
            let saveCount = 0
            const Goods = mongoose.model('Goods')
            data.map(item => {
                let newGoods = new Goods(item)
                newGoods.save().then(() => {
                    saveCount++
                    console.log(saveCount)
                }).catch(err => {
                    throw err
                })
            })
        })
        console.log("导入商品成功")
        ctx.body = { code: 200 }
    }

    static async insertAllCategory(ctx, next) {
        fs.readFile( resolve(__dirname,'../json/mongo_json/category.json'), 'utf8', (err, data) => {
            if (err) throw err;
            data = JSON.parse(data);
            let saveCount = 0;
            const Category = mongoose.model('Categories');
            data.RECORDS.map(item => {
                let newCategory = new Category(item);
                newCategory.save().then(() => {
                    saveCount++;
                    console.log(saveCount);
                }).catch(err => {
                    throw err;
                })
            })
        })
        console.log("导入分类成功")
        ctx.body = { code: 200 }
    }

    static async insertAllCategorySub(ctx, next) {
        fs.readFile(resolve(__dirname,'../json/mongo_json/category_sub.json'), 'utf8', (err, data) => {
            if (err) throw err
            data = JSON.parse(data)
            let saveCount = 0
            const CategorySub = mongoose.model('CategorySub')
            data.RECORDS.map(item => {
                let newCategory = new CategorySub(item)
                newCategory.save().then(() => {
                    saveCount++
                    console.log(saveCount)
                }).catch(err => {
                    throw err
                })
            })
        })
        console.log("导入子分类成功")
        ctx.body = { code: 200 }
    }


}

module.exports = InsertController
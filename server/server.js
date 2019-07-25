const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const Router = require('koa-router');
const index = require('./router/index');
const {connect,initSchemas } = require('./database/init');

app.use(logger());
app.use(bodyParser());
app.use(cors());

// 链接数据库
connect();
initSchemas();

// routes
app.use(index.routes(), index.allowedMethods());

app.listen(3001, () => {
    console.log('Listening at http://localhost:3001')
});
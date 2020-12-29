// base.url.js
const BASE_URL = (function () {
  let baseUrl = '';
  switch (process.env.NODE_ENV) {
    case 'development':
      // 本地的请求url
      baseUrl = 'http://localhost:3001/api/v1';
      break;
    case 'production':
      // 生产环境url
      baseUrl = 'https://prod/api';
      if (process.env.VUE_APP_ENV === 'test') {
        // 测试环境地址
        baseUrl = 'https://test/api';
      }
      if (process.env.VUE_APP_ENV === 'uat') {
        // uat 环境地址
        baseUrl = 'https://uat/api';
      }
      break;
  }
  return baseUrl;
})();
export default BASE_URL;

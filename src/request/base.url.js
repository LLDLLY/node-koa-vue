const BASE_URL = (function() {
  let baseUrl = "";
  switch (process.env.NODE_ENV) {
    case "development":
      // 本地的请求url
      baseUrl = "http://localhost:3001/api/v1";
      break;

    case "test":
      baseUrl = "https://test";
      break;

    case "uat":
      baseUrl = "https://uat";
      break;

    case "production":
      // 生产环境url
      baseUrl = "https://prod";
  }

  return baseUrl;
})();

export default BASE_URL;
